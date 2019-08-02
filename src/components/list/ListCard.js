import React from "react";
import "./list.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Swipeout from "rc-swipeout";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { removeList, priorityChange } from "../../actions/main";

const ListCard = ({
  item,
  removeList,
  priorityChange,
  productItem,
  history
}) => {
  const getDate = () => {
    let date = new Date(item.date);
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    return { date: date.getDate(), month: month[date.getMonth()] };
  };
  const goToCard = item => {
    console.log("LIST CARD === ", item);

    priorityChange(item);
    history.push("/cart");
  };
  // console.log(getDate());
  // console.log(data);
  return (
    <div className="list_card">
      <div className="list_card_date">
        <h3>{getDate().date}</h3>
        <p>{getDate().month}</p>
      </div>
      <div className="kk">
        <Swipeout
          right={[
            {
              text: <FontAwesomeIcon className="fa-times" icon={faTimes} />,
              onPress: () => removeList(item),
              style: { backgroundColor: "red", color: "white" },
              className: "custom-class-2"
            }
          ]}
          // onOpen={() => console.log('open')}
          // onClose={() => console.log('close')}
        >
          <div className="list_card_body" onClick={() => goToCard(item)}>
            <div className="list_card_total_items">
              <h4>{item.items.length} Item</h4>
            </div>
            <div className="list_card_name">
              <h2>{item.listName}</h2>
            </div>
            <div className="list_card_total">
              <h3>
                Rs.{" "}
                {item.items
                  .map(e => {
                    return (
                      productItem.fruits.find(lo => {
                        return lo.productId === e.productId;
                      }).price * e.count
                    );
                  })
                  .reduce((a, b) => {
                    return a + b;
                  }, 0)}
              </h3>
            </div>
          </div>
        </Swipeout>
      </div>
    </div>
  );
};

ListCard.prototype = {
  removeList: PropTypes.func.isRequired,
  priorityChange: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  productItem: state.main.productItem
});

export default connect(
  mapStateToProps,
  { removeList, priorityChange }
)(withRouter(ListCard));
