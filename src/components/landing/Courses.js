import React, { Fragment } from "react";
import { Typography, Toolbar, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CoursesCard from "./CoursesCard";
import Ava from "../../data/images/tandoori-chicken.jpg";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Courses = ({ courseList }) => {
  const useStyles = makeStyles(theme => ({
    title: {
      flexGrow: 1,
      fontWeight: 700
    }
  }));
  const classes = useStyles();

  return (
    <Fragment>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          COURSES
        </Typography>
      </Toolbar>

      <div className="grid">
        <Grid container spacing={2}>
          {courseList.map(ele => (
            <CoursesCard key={ele} name={ele} img={Ava} />
          ))}
        </Grid>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  courseList: state.main.courseList
});

export default connect(mapStateToProps)(withRouter(Courses));
