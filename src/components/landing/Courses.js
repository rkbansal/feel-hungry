import React, { Fragment } from "react";
import { Typography, Toolbar, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CoursesCard from "./CoursesCard";
import Ava from "../../data/images/avatar.jpg";

const Courses = () => {
  const useStyles = makeStyles(theme => ({
    title: {
      flexGrow: 1,
      fontWeight: 700
    }
  }));
  const classes = useStyles();
  const arr = [
    { img: Ava, name: "Starters" },
    { img: Ava, name: "Main Course" },
    { img: Ava, name: "Desert" },
    { img: Ava, name: "Beverages" }
  ];

  return (
    <Fragment>
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          COURSES
        </Typography>
      </Toolbar>

      <div className="grid">
        <Grid container spacing={2}>
          {arr.map((e, i) => (
            <CoursesCard key={i} name={e.name} img={e.img} />
          ))}
        </Grid>
      </div>
    </Fragment>
  );
};

export default Courses;
