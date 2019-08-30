import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { GridListTile, Typography, Avatar } from "@material-ui/core";

const useStyles = makeStyles({
  avatar: {
    margin: 15,
    width: 80,
    height: 80
  }
});

const SpecialCard = ({ item, handleClickOpen }) => {
  const classes = useStyles();

  return (
    <GridListTile
      style={{ margin: "0 auto 10px", cursor: "pointer" }}
      onClick={()=>handleClickOpen(item)}
    >
      <Avatar
        alt="Remy Sharp"
        src={require(`./../../data/images/${item.image}.jpg`)}
        className={classes.avatar}
      />
      <Typography
        variant="body2"
        align="center"
        style={{ maxWidth: "90px", margin: "auto" }}
      >
        {item.name}
      </Typography>
    </GridListTile>
  );
};

export default SpecialCard;
