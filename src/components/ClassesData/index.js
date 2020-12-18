import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from './Card';

const useStyles = makeStyles({
  GridContainer: {
    paddingLeft: '20px',
    paddingRight: '20px'
  }
});

const ClassesData = () => {
    const classes = useStyles();
    return (
      <div>
        <h1>Class</h1>
        <Grid container spacing={4} className={classes.GridContainer} justify="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
        </Grid>
      </div>
  );
};

export default ClassesData;
