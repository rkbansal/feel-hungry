import React from "react";
import LisCard from "./ListCard";
import { Typography, Toolbar, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  typog: {
    flexGrow: 1,
    fontWeight: 700
  }
}));

const List = ({ location, data }) => {
  const classes = useStyles();

  return (
    <div>
      <Toolbar>
        <Typography variant="h6" className={classes.typog}>
          {location.name ? location.name.toUpperCase() : "TODAYS SPECIAL"}
        </Typography>
      </Toolbar>
      {location.name
        ? data.map(ele => {
            if (ele.itemType == location.name) {
              return <LisCard key={ele.id} item={ele} />;
            }
          })
        : data.map(ele => <LisCard key={ele.id} item={ele} />)}
    </div>
  );
};

const mapStateToProps = state => ({
  data: state.main.data
});

export default connect(mapStateToProps)(List);
