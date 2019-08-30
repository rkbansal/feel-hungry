import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Button,
  Box
} from "@material-ui/core";
import "./list.css";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    border: 0
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flexGrow: 1,
    padding: 0
  },
  cover: {
    width: 90,
    // margin: 2,
    borderRadius: 5
  },
  button: {
    marginBottom: 30
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  },
  flex: {
    flex: 1
  },
  chip: {
    marginBottom: theme.spacing(2),
    height : 16
  }
}));

const ListCard = ({item}) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.card} style={{ boxShadow: "none" }}>
      <Box
        boxShadow={3}
        m={1}
        p={1}
        style={{ width: "90px", height: "90px" }}
        borderRadius={5}
      >
        <img src={require(`../../data/images/${item.image}.jpg`)} alt="image" className={classes.cover}></img>
      </Box>

      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="body2" style={{ marginTop: 10 }}>
            {item.name}
          </Typography>
          <Grid item xs container>
            <StarIcon style={{ color: "rgb(250, 230, 0)", fontSize: 18 }}>
              star
            </StarIcon>
            <Typography variant="body2">
              {item.rating} <span style={{ fontSize: 12 }}>123 Ratings</span>
            </Typography>
          </Grid>
          <Chip
            label={item.itemOrigin}
            className={classes.chip}
            variant="outlined"
            size="small"
          />
          <Typography variant="body2">${item.price}</Typography>
        </CardContent>
      </div>
      <div className={classes.details}>
        <div className={classes.flex}></div>
        <Button variant="outlined" color="primary" className={classes.button}>
          +Add
        </Button>
      </div>
    </Card>
  );
};

export default ListCard;
