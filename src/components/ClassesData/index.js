import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Card from './Card';
// import/no-named-as-default
import AddCourse from './AddCourse';
import { classesService } from '../../services';

const useStyles = makeStyles({

});
const useStyles = makeStyles((theme) => {
  return {
    addbutton: {
      position: 'absolute',
      bottom: '20px',
      right: '20px',
    },
    GridContainer: {
      paddingLeft: '60px',
      paddingRight: '60px'
    }
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    radio: {
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(2, 0, 2),
    },
  };
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
          <Fab color="primary" aria-label="add" className={classesstyle.addbutton} onClick={() => AddCourse(data.id)}>
            <AddIcon />
          </Fab>
        </Grid>

      </div>
  );
}

export default ClassesData;
