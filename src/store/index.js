import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const data = require('../data/data.json');
const product = require('../data/product.json');

var priority = data.data.find(e=>{return e.priority === 1});
const v=(priority)=>{
  var priorCart =[];
  priority && priority.items.map((e)=>{
    var c = {...product.fruits.find(lo=>{return lo.productId === e.productId})}
    c.quantity = e.count;
    return priorCart.push(c);
  })
  return priorCart;
}

const initialState ={
  data : data.data,
  productItem : product,
  searchHide : false,

  cartItems : v(priority),
  priorData : priority,
  listInputOpen : false,
  newName : priority.listName
}

const reducer = (state = initialState, action)=>{
  switch (action.type){
    case 'ADD_TO_STATE':
      return Object.assign({}, state, {...action.value})
    case 'CHANGE_PRIORITY':
    // console.log("store",action.pass);
    
      return Object.assign({}, state, {priorData: action.pass, cartItems : v(action.pass), newName : action.pass.listName})
    case 'CHANGE_LIST_NAME':
      let indexxx = state.data.findIndex(e=>{return e.id === state.priorData.id})
      state.data[indexxx].listName = state.newName;
      return Object.assign({},state,state.priorData["listName"] =state.newName);
    case "SEARCH_HIDE":
      return Object.assign({}, state, {searchHide : !state.searchHide})
      
    case "ADD_TO_CART":
      let arr = [...state.cartItems];
      let add = action.add;
      let les = action.les;
      // console.log(add,les);
      let z = {...state.priorData}
      
      let p;
      
      if(action.add && add.quantity+add.variation <= add.available){
        if(arr.length === 0){
          p = Object.assign({}, add ,{quantity : add.startPoint})
          arr.push(p);
        }
        else{
          let index = arr.findIndex(e=>{ return e.productId === add.productId})
          if(index === -1){
            p = Object.assign({}, add ,{quantity : add.startPoint})
            arr.push(p);
          }else{
            arr[index].quantity += arr[index].variation;
          }
        }
      }
      if(action.les){
        let index = arr.findIndex(e=>{ return e.productId === les.productId})
        if(arr[index].quantity === arr[index].startPoint){
          arr.splice(index,1)
        }else{
          arr[index].quantity -= arr[index].variation;
        }
      }
      z.items = arr.map(e=>{
         return {productId : e.productId, count : e.quantity}
      })
      let index = state.data.findIndex(e=>{return e.id === z.id})
      state.data.splice(index,1,z)
      return Object.assign({}, state, {cartItems : arr, priorData: z})
    case 'CLEAR_CART':
      let indexx = state.data.findIndex(e=>{return e.id === state.priorData.id})
      console.log(indexx);
      
      state.data[indexx].items = [];
      return Object.assign({}, state, {cartItems : []}, state.priorData["items"] =[])
    case 'REMOVE_LIST':
      let i = state.data.findIndex(e=> e.id=== action.pass.id)
      let s = [...state.data]
      s.splice(i,1);
      return Object.assign({},state,{data : [...s]});
    default:
      return state
  }
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware()));

export default store;