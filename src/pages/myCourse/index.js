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
    const classInfo = [];
    setLoading(true);
    classService
      .getClassByStudentId(userId)
      .then((res) => {
        if (res.data != null) {
          setClasses(res.data.registeredClass);
        } else {
          setLoading(true);
          userService
            .getTeacherById(userId)
            .then((resp) => {
              resp.data.ownedClass.map((data) => {
                setLoading(true);
                classService
                  .getClassById(data)
                  .then((respon) => {
                    classInfo.push(respon.data);
                    setClasses(classInfo);
                  })
                  .catch((err) => {
                    // eslint-disable-next-line no-console
                    console.log(err);
                  })
                  .finally(() => {
                    setLoading(false);
                  });
                return classInfo;
              });
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
    <div className="mycourse">
      <h2 className="mycourse__heading">My Course</h2>
      {!isLoading && classes !== [] ? (
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
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default MyCourse;
