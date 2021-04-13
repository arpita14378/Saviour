import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Expense Analysis',
      backgroundColor: 'rgba(106, 90, 205,0.2)',
      borderColor: 'rgba(106, 90, 205,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(258,95,135,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
        label: 'Expense Analysis',
        backgroundColor: 'rgba(106, 90, 205,0.2)',
        borderColor: 'rgba(106, 90, 205,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(258,95,135,1)',
        data: [25, 49, 80, 61, 56, 85, 40]
      }
  ]
};


export default function barchart() {
    return (
        <div>
          <h2>Expense Chart</h2>
          <Bar
            data={data}
            width={20}
            height={150}
            options={{
              maintainAspectRatio: false
            }}
          />
        </div>
      );
}


