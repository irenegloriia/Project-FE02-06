import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Card from './Card';
import { classesService } from '../../services';

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

function ClassesData() {
  const [isLoading, setLoading] = useState(false);
  const [classes, setClasses] = useState([]);
  const classesstyle = useStyles();

  useEffect(() => {
    setLoading(true);
    classesService
      .getAllClasses()
      .then((res) => {
        setClasses(res.data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

    return (
      <div>
        <h1>Class</h1>
        <Grid container spacing={4} className={classesstyle.GridContainer} justify="center">
          {isLoading}
          <Grid item xs={12} sm={6} md={4}>
            {classes.map((data) => {
              return (
                <Card
                  // eslint-disable-next-line no-underscore-dangle
                  key={data.id}
                  name={data.name}
                  desc={data.description}
                />
              );
            })}
          </Grid>
        </Grid>
        <Fab color="primary" aria-label="add" className={classesstyle.addbutton}>
          <AddIcon />
        </Fab>
      </div>
  );
}

export default ClassesData;
