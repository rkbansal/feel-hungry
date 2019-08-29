import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Ava from "../../data/images/avatar.jpg";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import { Avatar, Toolbar, Typography } from "@material-ui/core";

const User = () => {
  const useStyles = makeStyles(theme => ({
    avatar: {
      margin: 10
    },
    title: {
      flexGrow: 1,
      fontWeight: 700
    }
  }));
  const classes = useStyles();

  return (
    <Toolbar>
      <div className="icon_button">
        <div className="icon_res">
          <RestaurantMenuIcon />
        </div>
      </div>
      <Typography variant="h6" className={classes.title}>
        SKADOOKHHH
      </Typography>
      <Avatar alt="RemySharp" src={Ava} className={classes.avatar} />
    </Toolbar>
  );
};

export default User;
