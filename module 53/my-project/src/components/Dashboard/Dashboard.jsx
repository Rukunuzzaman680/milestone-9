import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts/es6';

const Dashboard = () => {
  const data = [
    { name: 'Student1', id: 1, che: 85, phy: 75, math: 90 },
    { name: 'Student2', id: 2, che: 70, phy: 88, math: 95 },
    { name: 'Student3', id: 3, che: 92, phy: 78, math: 80 },
    { name: 'Student4', id: 4, che: 60, phy: 85, math: 75 },
    { name: 'Student5', id: 5, che: 78, phy: 92, math: 88 },
    { name: 'Student6', id: 6, che: 85, phy: 70, math: 93 },
    { name: 'Student7', id: 7, che: 75, phy: 82, math: 86 },
    { name: 'Student8', id: 8, che: 88, phy: 95, math: 78 },
    { name: 'Student9', id: 9, che: 90, phy: 75, math: 85 },
    { name: 'Student10', id: 10, che: 77, phy: 88, math: 92 },
    { name: 'Student11', id: 11, che: 82, phy: 90, math: 80 },
    { name: 'Student12', id: 12, che: 95, phy: 78, math: 70 },
  ];
  return (
    <div className="mt-16 ml-10">
      <LineChart
        width={1000}
        height={400}
        data={data}
        style={{ backgroundColor: '#ADD8E6' }}
        margin={{
          top: 25,
          right: 20,
          left: 30,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" strokeWidth={2} dataKey="che" stroke="blue" />
        <Line type="monotone" strokeWidth={2} dataKey="phy" stroke="red" />
        <Line type="monotone" strokeWidth={2} dataKey="math" stroke="green" />
      </LineChart>
    </div>
  );
};

export default Dashboard;
