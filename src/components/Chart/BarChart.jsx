import React from "react";
import { Line } from "react-chartjs-2";

export default function Bar() {
  const data = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    //backgroundColor: ['rgba(255,0,0,1)'],
    //lineTension: 1,
    datasets: [
      {
        label: "HSN",
        fill: false,
        borderColor: "#303030",
        borderWidth: 1,
        pointRadius: 2,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  let options = {
    legend: {
      position: "right",
      labels: {
        boxWidth: 10,
      },
    },
    scales: {
      xAxes: [
        {
          ticks: { display: true },
        },
      ],
    },
  };

  return (
    <div>
      <Line data={data} 
// @ts-ignore
      options={options} />
    </div>
  );
}
