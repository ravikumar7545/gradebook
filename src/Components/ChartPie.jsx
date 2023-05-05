import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
const ChartPie = (props) => {
  const data = props.value;
  return (
    <div>
      <ResponsiveContainer width="100%" height={230}>
        <PieChart data={data} width={730} height={250}>
          <Pie
            data={data}
            dataKey="number"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#d63031"
            label
          >
            <Cell key={`cell-1`} fill="#00b894" />
            <Cell key={`cell-2`} fill="#d63015" />
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartPie;
