import React from 'react';
import {
  ResponsiveContainer,
  XAxis,
  Bar,
  Tooltip,
  BarChart,
  YAxis,
  Legend,
} from 'recharts';
const ChartBar = (props) => {
  const data = props.value;
  return (
    <div>
      <ResponsiveContainer width={300} height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" interval={'preserveStartEnd'} />
          <Bar dataKey="number" />
          <Tooltip />
          <YAxis />
          <Legend />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartBar;
