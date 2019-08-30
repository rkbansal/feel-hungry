import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  Toolbar,
  IconButton,
  Typography,
  Paper,
  Grid,
  Slide
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import AddItem from "./AddItem";

const message =
  "Text messages are used for personal, family, business and social purposes. Governmental and non-governmental organizations use text messaging for communication between colleagues. In the 2010s, the sending of short informal messages has become an accepted part of many cultures, as happened earlier with emailing.[1] This makes texting a quick and easy way to communicate with friends, family and colleagues,";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(2)
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  typog: {
    fontWeight: 700,
    margin: theme.spacing(0, 2)
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "rgb(228, 206, 7)",
    borderRadius: 0
  },
  button: {
    margin: theme.spacing(0, 2, 2, 2)
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogUI = ({ open, handleClose, item }) => {
  const classes = useStyles();

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </Toolbar>
      <Typography variant="h5" className={classes.typog}>
        Add To My Plate
      </Typography>
      <AddItem item={item} />
      <Paper className={classes.paper} style={{ boxShadow: "none" }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs>
            <Typography variant="body2">{item.description}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <div className={classes.root}>
        <textarea
          name="comment"
          form="usrform"
          className="text_area"
          placeholder="Write your preerence here"
        ></textarea>
      </div>
      <Button variant="contained" color="primary" className={classes.button}>
        Primary
      </Button>
    </Dialog>
  );
};

export default DialogUI;
