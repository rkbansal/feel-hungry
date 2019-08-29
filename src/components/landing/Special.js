import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import {
  GridListTile,
  Typography,
  Avatar,
  Toolbar,
  Link
} from "@material-ui/core";
import image from "../../data/images/avatar.jpg";

const tileData = [
  { img: image, name: "Kufta Karma" },
  { img: image, name: "Veg Momo" },
  { img: image, name: "Chicken Kabab" },
  { img: image, name: "Pizza" },
  { img: image, name: "Lassi" },
  { img: image, name: "Dosa" }
];

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  title: {
    color: theme.palette.primary.light
  },
  typog: {
    flexGrow: 1,
    fontWeight: 700
  },
  link: {
    margin: theme.spacing(1)
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  bigAvatar: {
    margin: 15,
    width: 80,
    height: 80
  }
}));

const Special = ({ history }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Toolbar>
        <Typography variant="h5" className={classes.typog}>
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
          {tileData.map(tile => (
            <GridListTile key={tile.name}>
              <Avatar
                alt="Remy Sharp"
                src={tile.img}
                className={classes.bigAvatar}
              />
              <Typography variant="body2" align="center">
                {tile.name}
              </Typography>
            </GridListTile>
          ))}
        </GridList>
      </div>
    </Fragment>
  );
};

export default Special;
