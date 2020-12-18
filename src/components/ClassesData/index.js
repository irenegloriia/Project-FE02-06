import React from 'react';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import Card from './Card';

const useStyles = makeStyles({
  addbutton: {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
  },
  GridContainer: {
    paddingLeft: '60px',
    paddingRight: '60px'
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
        <Fab color="primary" aria-label="add" className={classes.addbutton}>
          <AddIcon />
        </Fab>
      </div>
  );
};

export default ClassesData;
