import React, { useState, useEffect } from 'react';
import { classService } from '../../services';
import { CourseCard } from '../../components';
import './style.css';

function AllCourse() {
  const [isLoading, setLoading] = useState(false);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    setLoading(true);
    classService
      .getAllClass()
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
    <div className="allcourse">
      <h2 className="allcourse__heading">See Available Courses</h2>
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

export default AllCourse;
