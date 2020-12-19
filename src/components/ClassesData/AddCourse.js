import React, { useState } from 'react';
// import { Link, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';
// import Card from './Card';
import { classesService } from '../../services';

const useStyles = makeStyles((theme) => {
    return {
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

const AddCourse = () => {
  const [name, setName] = useState('');
  const [description, setDesc] = useState('');

  const [isCourseLoading, setCourseLoading] = useState(false);

  const onSubmitCourse = () => {
    setCourseLoading(true);
    classesService
      .createCourse(name, description)
      .then((res) => {
        if (res.status === 'OK') {
            window.location.replace('/Classespage');
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      })
      .finally(() => {
        setCourseLoading(false);
      });
  };
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Create Course
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitCourse();
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
                autoComplete="description"
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isCourseLoading}
          >
            Create Course
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default AddCourse;
