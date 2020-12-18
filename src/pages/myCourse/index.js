import React, { useState, useEffect } from 'react';
import { CourseCard } from '../../components';
import { getCookie } from '../../utils/cookie';
import { userService, classService } from '../../services';
import './style.css';

function MyCourse() {
  const [isLoading, setLoading] = useState(false);
  const [classes, setClasses] = useState([]);
  const userId = JSON.parse(getCookie('userData'));

  useEffect(() => {
    setLoading(true);
    classService
      .getClassByStudentId(userId)
      .then((res) => {
        setClasses(res.data.registeredClass);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userId]);

  useEffect(() => {
    setLoading(true);
    userService
      .getStudentById(userId)
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log(res);
        // setClasses(res.data);
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
    <div className="mycourse">
      <h2 className="mycourse__heading">My Course</h2>
      {isLoading}
      <div className="cards">
        {classes.map((data) => {
          return (
            <CourseCard
              // eslint-disable-next-line no-underscore-dangle
              key={data._id}
              name={data.name}
              desc={data.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MyCourse;
