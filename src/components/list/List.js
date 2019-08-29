import React from "react";
import {
  Paper,
  Grid,
  ButtonBase,
  Typography,
  Icon,
  Chip,
  Button
} from "@material-ui/core";
import Ava from "../../data/images/avatar.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const List = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="food pic" src={Ava} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Name
                </Typography>
                <Grid item xs container>
                  <Icon style={{ color: "rgb(250, 230, 0)", fontSize: 18 }}>
                    star
                  </Icon>
                  <Typography variant="body2" gutterBottom>
                    4.6 123 Ratings
                  </Typography>
                </Grid>
                <Chip
                  label={"Chinese"}
                  className={classes.chip}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs container>
                <Grid item xs={6}>
                  <Typography variant="body2">${220}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                  >
                    +Add
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            {/* <Grid item>
              <Button variant="outlined" color="primary" className={classes.button}>
                +Add
              </Button>
            </Grid> */}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default List;
