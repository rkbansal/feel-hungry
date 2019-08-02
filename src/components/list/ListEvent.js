import React from "react";
import "./list.css";
import { connect } from "react-redux";
import ListCard from "./ListCard";
// import EmptyList from './EmptyList';

const ListEvent = ({ data }) => {
  return (
    <div className="list_event">
      {/* {(data.length > 0)? */}
      {data.map(item => {
        return <ListCard key={item.id} item={item} />;
      })
      // :<EmptyList />
      }
    </div>
  );
};

const mapStateToProps = state => ({
  data: state.main.data
});

export default connect(mapStateToProps)(ListEvent);
