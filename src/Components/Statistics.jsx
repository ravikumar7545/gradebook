import '../css/Statistics.css';
import Chart from './Chart';

const Statistics = (props) => {
  const student_report = {
    between_five_six: 0,
    between_six_seven: 0,
    between_seven_eight: 0,
    more_than_eight: 0,
    failed_student: 0,
    passed_student: 0,
    max_grade: 0,
    min_grade: 11,
  };
  const studentArr = props.value;
  studentArr.forEach((student) => {
    if (student.final_grade > student_report.max_grade) {
      student_report.max_grade = student.final_grade;
    }
    if (student.final_grade < student_report.min_grade) {
      student_report.min_grade = student.final_grade;
    }
    if (student.final_grade > 4.0) {
      student_report.passed_student += 1;
    } else {
      student_report.failed_student += 1;
    }
    if (student.final_grade > 5.0 && student.final_grade <= 6.0) {
      student_report.between_five_six += 1;
    } else if (student.final_grade > 6.0 && student.final_grade <= 7.0) {
      student_report.between_six_seven += 1;
    } else if (student.final_grade > '7.0' && student.final_grade <= '8.0') {
      student_report.between_seven_eight += 1;
    } else {
      student_report.more_than_eight += 1;
    }
  });

  return (
    <div className="statistics-box">
      <div className="statistics-content">
        <table>
          <thead>
            <tr>
              <th colSpan="2">Student Report</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Total Student</td>
              <td>{studentArr.length}</td>
            </tr>
            <tr>
              <td>Passed student</td>
              <td>{student_report.passed_student}</td>
            </tr>
            <tr>
              <td>Failed student</td>
              <td>{student_report.failed_student}</td>
            </tr>
            <tr>
              <td>Maximum Grade</td>
              <td>{student_report.max_grade}</td>
            </tr>
            <tr>
              <td>Minimum Grade</td>
              <td>{student_report.min_grade}</td>
            </tr>
            <tr>
              <td> 5-6 GPA</td>
              <td>{student_report.between_five_six}</td>
            </tr>
            <tr>
              <td>6-7 GPA</td>
              <td>{student_report.between_six_seven}</td>
            </tr>
            <tr>
              <td>6-7 GPA</td>
              <td>{student_report.between_seven_eight}</td>
            </tr>
            <tr>
              <td>More than 8 GPA</td>
              <td>{student_report.more_than_eight}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="statistics-chart">
        <h2>Graphic representation</h2>
        <Chart value={student_report} />
      </div>
    </div>
  );
};

export default Statistics;
