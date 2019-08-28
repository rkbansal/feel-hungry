import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./header.css";
import {
  Avatar,
  Toolbar,
  AppBar,
  Typography,
  IconButton
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';
import Ava from "../../data/images/avatar.jpg";

const Header = () => {
  const useStyles = makeStyles(theme => ({
    avatar: {
      margin: 10
    },
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  }));
  const classes = useStyles();

  return (
    <div className="header">
      <AppBar position="static" color="default" >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            SKADOOKS
          </Typography>
          <Avatar alt="RemySharp" src={Ava} className={classes.avatar} />
        </Toolbar>
      </AppBar>
      <h1>ABC</h1>
    </div>
  );
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(withRouter(Header));
