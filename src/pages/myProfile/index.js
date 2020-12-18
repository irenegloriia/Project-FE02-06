import React, { useState, useEffect } from 'react';
import { getCookie } from '../../utils/cookie';
import { userService } from '../../services';
import './style.css';

const MyProfile = () => {
  const [isLoading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);

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

  return (
    <div className="my_profile">
      <h1>my profile!</h1>
      {!isLoading && userData != null ? (
        <>
          <p>{userData.email}</p>
          <p>{userData.name}</p>
          <p>{userData.phone}</p>
        </>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default MyProfile;
