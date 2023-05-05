import React, { useContext } from 'react';
import '../css/details.css';
import StudentContext from '../StudentContext';
const Content = (props) => {
  const { isDetailsTrigger, setIsDetailsTrigger, setDetailsData } =
    useContext(StudentContext);
  const {
    id,
    name,
    ticket_number,
    exam_grade,
    rating_grade,
    final_grade,
    status,
  } = props.value;
  const addColor = (e) => {
    let rowColor = e.target.parentElement.className;
    if (rowColor === '') {
      e.target.parentElement.className = 'row_clicked';
      e.target.parentElement.children[1].innerText =
        e.target.parentElement.children[1].innerText.toUpperCase();
    } else {
      let temp_text = e.target.parentElement.children[1].innerText;
      e.target.parentElement.className = '';
      e.target.parentElement.children[1].innerText =
        temp_text.charAt(0).toUpperCase() + temp_text.slice(1).toLowerCase();
    }
  };
  return (
    <>
      <tr onClick={(e) => addColor(e)}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{ticket_number}</td>
        <td>{rating_grade}</td>
        <td>{exam_grade}</td>
        <td>{final_grade}</td>
        <td>{status}</td>
        <td>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsDetailsTrigger(!isDetailsTrigger);
              setDetailsData([props.value]);
            }}
          >
            Details
          </button>
        </td>
      </tr>
    </>
  );
};

export default Content;
