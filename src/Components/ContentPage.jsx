import React, { useEffect, useState, useContext } from 'react';
import '../css/ContentPage.css';
import Content from './Content.jsx';
import studentData from '../student.json';
import StudentContext from '../StudentContext';
import Statistics from './Statistics';

const ContentPage = () => {
  const [studentsList, setStudentList] = useState([]);
  const [isStatisticsTrigger, setIsStatisticsTrigger] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSortByAlpha, setIsSortByAlpha] = useState(false);
  const [isSortByGrade, setIsSortByGrade] = useState(false);
  const { setIsDownloadTrigger, setDownloadData } = useContext(StudentContext);
  const [isActive, setIsActive] = useState({
    all: true,
    passed: false,
    failed: false,
  });
  const allStudentDisplay = (e) => {
    setStudentList(studentData);
    setIsActive({ all: true, passed: false, failed: false });
  };
  const passedStudentDisplay = (e) => {
    const temp_passedStudent = studentData.filter(
      (ele) => ele.status === 'passed'
    );
    setStudentList(temp_passedStudent);
    e.target.className = 'active';
    setIsActive({ all: false, passed: true, failed: false });
  };
  const failedStudentDisplay = () => {
    const temp_failedStudent = studentData.filter(
      (ele) => ele.status === 'failed'
    );
    setStudentList(temp_failedStudent);
    setIsActive({ all: false, passed: false, failed: true });
  };
  const compare = (a, b) => {
    if (a.name < b.name) {
      if (isSortByAlpha) {
        return 1;
      } else {
        return -1;
      }
    } else {
      if (isSortByAlpha) {
        return -1;
      } else {
        return 1;
      }
    }
  };
  const sortByAlpha = () => {
    const temp_sortedList = [...studentsList];
    temp_sortedList.sort(compare);
    setStudentList(temp_sortedList);
    setIsSortByAlpha(!isSortByAlpha);
  };
  const compareByGrade = (a, b) => {
    if (a.final_grade < b.final_grade) {
      if (isSortByGrade) {
        return 1;
      } else {
        return -1;
      }
    } else {
      if (isSortByGrade) {
        return -1;
      } else {
        return 1;
      }
    }
  };
  const sortByGrade = () => {
    const temp_sortedList = [...studentsList];
    temp_sortedList.sort(compareByGrade);
    setStudentList(temp_sortedList);
    setIsSortByGrade(!isSortByGrade);
  };
  useEffect(() => {
    let grade;
    let changedStudent = studentData.map((student) => {
      grade = (0.6 * student.exam_grade + 0.4 * student.rating_grade).toFixed(
        1
      );
      if (grade > 4.0) {
        student.status = 'passed';
      } else {
        student.status = 'failed';
      }
      student.final_grade = grade;
      return student;
    });
    setStudentList(changedStudent);
  }, []);
  return (
    <>
      {' '}
      <div className="content-page">
        <div className="features">
          <div className="buttons">
            <div className="filter-buttons">
              <button
                className={isActive.all ? 'active' : ''}
                onClick={(e) => allStudentDisplay(e)}
              >
                All
              </button>
              <button
                className={isActive.passed ? 'active' : ''}
                onClick={passedStudentDisplay}
              >
                Passed
              </button>
              <button
                className={isActive.failed ? 'active' : ''}
                onClick={failedStudentDisplay}
              >
                Failed
              </button>
            </div>
            <div className="sorting-buttons">
              <button onClick={sortByAlpha}>A-Z</button>
              <button onClick={sortByGrade}>1-10</button>
            </div>
          </div>
          <div className="search-box">
            <input
              type="search"
              placeholder="Enter name to search"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              onClick={() => {
                setIsDownloadTrigger(true);
                setDownloadData(studentsList);
              }}
            >
              Download
            </button>
          </div>
        </div>
        <div className="main-content">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Ticket’s number</th>
                <th>Ticket’s topic</th>
                <th>Exam grade</th>
                <th>Rating grade</th>
                <th>Comments</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {studentsList.length > 0 &&
                studentsList
                  .filter((ele) =>
                    ele.name.toLowerCase().startsWith(searchQuery)
                  )
                  .map((ele) => <Content key={ele.id} value={ele} />)}
            </tbody>
          </table>
        </div>
        <div className="statistics">
          <button onClick={() => setIsStatisticsTrigger(!isStatisticsTrigger)}>
            {isStatisticsTrigger ? 'Hide' : 'Show'} Statistics
          </button>
          {isStatisticsTrigger && <Statistics value={studentsList} />}
        </div>
      </div>
    </>
  );
};

export default ContentPage;
