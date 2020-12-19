import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
import { getCookie } from '../../utils/cookie';
import { userService } from '../../services';
import './style.css';

const MyProfile = () => {
  //   const useStyles = makeStyles((theme) => {
  //     return {
  //       paper: {
  //         marginTop: theme.spacing(8),
  //         display: 'flex',
  //         flexDirection: 'column',
  //         alignItems: 'center',
  //       },
  //       avatar: {
  //         margin: theme.spacing(1),
  //         backgroundColor: theme.palette.secondary.main,
  //       },
  //       form: {
  //         width: '100%', // Fix IE 11 issue.
  //         marginTop: theme.spacing(1),
  //       },
  //       submitStudent: {
  //         margin: theme.spacing(3, 0, 0),
  //       },
  //       submitTeacher: {
  //         margin: theme.spacing(3, 0, 2),
  //       },
  //     };
  //   });
  const [isLoading, setLoading] = useState(false);
  const [isUpdateLoading, setIsUpdateLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  //   const classes = useStyles();

  const userId = JSON.parse(getCookie('userData'));
  useEffect(() => {
    setLoading(true);
    userService
      .getStudentById(userId)
      .then((res) => {
        if (res.data != null) {
          setUserData(res.data);
        } else {
          userService
            .getTeacherById(userId)
            .then((resp) => {
              setUserData(resp.data);
            })
            .catch((err) => {
              // eslint-disable-next-line no-console
              console.log(err);
            })
            .finally(() => {
              setLoading(false);
            });
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userId]);

  const onSubmitUpdate = () => {
    setIsUpdateLoading(true);
    userService
      .updateStudentById(username, name, email)
      .then((res) => {
        if (res.status === 'OK') {
          window.location.replace('/login');
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      })
      .finally(() => {
        setIsUpdateLoading(false);
      });
  };
  return (
    <div className="my_profile">
      <h2>My Profile!</h2>
      {!isLoading && userData != null ? (
        <>
          <div className="classes-paper">
            <form
              className="classes-form"
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                onSubmitUpdate();
              }}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                placeholder={userData.name}
                name="name"
                autoComplete="name"
                autoFocus
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                placeholder={userData.email}
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                placeholder={userData.username}
                name="username"
                autoComplete="username"
                autoFocus
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="classes-submit"
                disabled={isUpdateLoading}
              >
                Update Profile
              </Button>
            </form>
          </div>
        </>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default MyProfile;
