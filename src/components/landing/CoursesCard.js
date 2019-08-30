import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ButtonBase, Typography, Grid, Paper } from "@material-ui/core";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  paper: {
    textAlign: "center"
  },
  title: {
    flexGrow: 1
  },
  image: {
    width: 60,
    height: 60
  },
  img: {
    margin: "5",
    maxWidth: "90%",
    maxHeight: "90%",
    borderRadius: "5px"
  }
}));

const onClick = (history, name) => {
  history.push({
    pathname: "/list",
    name
  });
};

const Card = ({ history, name, img }) => {
  const classes = useStyles();
  return (
    <Grid
      item
      xs={6}
      style={{ cursor: "pointer" }}
      onClick={() => onClick(history, name)}
    >
      <Paper>
        <Grid item xs container>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="food pic" src={img} />
          </ButtonBase>
          <Typography
            variant="body2"
            style={{ margin: "auto" }}
            className={classes.paper}
          >
            {name}
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default withRouter(Card);
