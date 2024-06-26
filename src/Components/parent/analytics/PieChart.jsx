import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

import { useSelector } from "react-redux";
const DonotChart = ({ COLORS }) => {
  const users = useSelector((state) => state.parent.users);

  const activeUser = users.filter((user) => user.isActive === true);
  const data = activeUser[0]?.pieData;
  const percentage = activeUser[0].percentage;

  return (
    <ResponsiveContainer>
      <PieChart height={400} width={400}>
        <Pie
          data={data}
          // cx={50}
          // cy={80}
          innerRadius={40}
          outerRadius={60}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <h4 className="donotPercentage">{percentage}%</h4>
    </ResponsiveContainer>
  );
};

export default DonotChart;
