import React from 'react';
import ChartBar from './ChartBar';
import ChartPie from './ChartPie';
import '../css/Chart.css';
const Chart = (props) => {
  const {
    passed_student,
    failed_student,
    between_five_six,
    between_six_seven,
    between_seven_eight,
    more_than_eight,
  } = props.value;
  const bar_data = [
    { name: '5-6', number: between_five_six },
    { name: '6-7', number: between_six_seven },
    { name: '7-8', number: between_seven_eight },
    { name: '<8', number: more_than_eight },
  ];
  const pie_data = [
    { name: 'passed', number: passed_student },
    { name: 'failed', number: failed_student },
  ];
  return (
    <div className="chart">
      <ChartBar value={bar_data} />
      <ChartPie value={pie_data} />
    </div>
  );
};

export default Chart;
