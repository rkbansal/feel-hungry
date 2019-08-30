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
import DialogUI from "./DialogUI";

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

const Info = () => {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <DialogUI handleClose={handleClose} open={open} />
    </div>
  );
};
export default Info;
