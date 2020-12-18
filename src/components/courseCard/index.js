import React from 'react';
import './style.css';

const Card = (props) => {
  //   const [clicked, setClicked] = useState(false);
  const { name, desc } = props;

  return (
    <div>
      <div
        className="course_card"
        role="button"
        onClick={() => {
          // window.open(data.url);
          //   setClicked(true);
        }}
        onKeyDown={() => {}}
        tabIndex="0"
      >
        <span>
          <h3>{name}</h3>
        </span>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
