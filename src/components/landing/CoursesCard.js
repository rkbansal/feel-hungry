import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ButtonBase, Typography, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  title: {
    flexGrow: 1
  },
  image: {
    width: 60,
    height: 60,
    marginLeft: "10px"
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "5px"
  }
}));

const Card = ({ name, img }) => {
  const classes = useStyles();
  return (
    <Grid item xs={6}>
      <Paper>
        <Grid item xs container>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="food pic" src={img} />
          </ButtonBase>
          <Typography variant="body1" className={classes.paper}>
            {name}
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Card;
