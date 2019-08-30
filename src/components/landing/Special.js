import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import { Typography, Toolbar, Link } from "@material-ui/core";
import { connect } from "react-redux";
import SpecialCard from "./SpecialCard";
import DialogUI from "../info/DialogUI";

const useStyles = makeStyles(theme => ({
  typog: {
    flexGrow: 1,
    fontWeight: 700
  },
  link: {
    margin: theme.spacing(1)
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)"
  }
}));

const Special = ({ data }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [dataItem, setDataItem] = useState({});

  const handleClickOpen = dataInfo => {
    console.log("DATA INFO", dataInfo);
    setDataItem(dataInfo);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <DialogUI handleClose={handleClose} open={open} item={dataItem} />

      <Toolbar>
        <Typography variant="h6" className={classes.typog}>
          TODAYS SPECIAL
        </Typography>

        <Typography>
          <Link href={"/list"} className={classes.link}>
            See All
          </Link>
        </Typography>
      </Toolbar>
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={4}>
          {data.map(ele => (
            <SpecialCard
              item={ele}
              key={ele.id}
              handleClickOpen={item => handleClickOpen(item)}
            />
          ))}
        </GridList>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  data: state.main.data
});

export default connect(mapStateToProps)(Special);
