import React, { useContext } from 'react';
import StudentContext from '../StudentContext';
import '../css/details.css';

const Details = (props) => {
  const { isDetailsTrigger, setIsDetailsTrigger } = useContext(StudentContext);
  const {
    id,
    name,
    ticket_number,
    ticket_topic,
    rating_grade,
    final_grade,
    exam_grade,
    status,
  } = props.value[0];
  return (
    <div className="details">
      <div className="details-box">
        <h3>Student Details</h3>
        <p>
          Id: <span>{id}</span>
        </p>
        <p>
          Name:<span>{name}</span>
        </p>
        <p>
          Ticket Number: <span>{ticket_number}</span>
        </p>
        <p>
          Ticket Topic: <span>{ticket_topic}</span>
        </p>
        <p>
          Rating Grade: <span>{rating_grade}</span>
        </p>
        <p>
          Exam Grade: <span>{exam_grade}</span>
        </p>
        <p>
          Final Grade: <span>{final_grade}</span>
        </p>
        <p>
          Status:<span>{status.toUpperCase()}</span>
        </p>
        <button onClick={() => setIsDetailsTrigger(!isDetailsTrigger)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Details;
