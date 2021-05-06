// import React from "react";
// import { Line } from "react-chartjs-2";

// export default function Bar() {
//   const data = {
//     labels: ["M", "T", "W", "T", "F", "S", "S"],
//     //backgroundColor: ['rgba(255,0,0,1)'],
//     //lineTension: 1,
//     datasets: [
//       {
//         label: "HSN",
//         fill: false,
//         borderColor: "#303030",
//         borderWidth: 1,
//         pointRadius: 2,
//         data: [65, 59, 80, 81, 56, 55, 40],
//       },
//     ],
//   };

//   let options = {
//     legend: {
//       position: "right",
//       labels: {
//         boxWidth: 10,
//       },
//     },
//     scales: {
//       xAxes: [
//         {
//           ticks: { display: true },
//         },
//       ],
//     },
//   };

//   return (
//     <div>
//       <Line data={data}
// // @ts-ignore
//       options={options} />
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Bar } from "react-chartjs-2";
import { useQuery } from "react-query";
import { getHistory } from "../../../apitest/api";
import moment from "moment";

const start = moment(new Date()).format("YYYY-MM-DD-HH");
const end = moment(+new Date() + 10 * 3600 * 1000).format("YYYY-MM-DD-HH");
const options = [
  { label: "last hour", value: "hour" },
  { label: "last day", value: "day" },
  { label: "last week", value: "week" },
];
export default function Barchart() {
  const defaultDate = options[0];
  const defaultData = {};
  const { data: historyData, status, error } = useQuery("history", getHistory);
  const [date, setDate] = useState(defaultDate.value);
  const [chartData, setChartData] = useState(defaultData);
  const [lux, setLux] = useState({});
  // console.log(status === "success" && historyData);
  // const rest = status === "success" &&　historyData.filter((v)=>v.logs.timestamp>start);
  // const tests = status==="success"&&historyData.logs.filter(v => moment(v.timestamp).format("YYYY-MM-DD-HH")>=start)
  // console.log(tests);
  function addHourif(acc, cv) {
    const prevtime = status === "success" && new Date(acc.slice(-1)[0].logs.timestamp).getTime();
    const cvtime = status === "success" && new Date(cv.logs.timestamp).getTime();
    if (cvtime >= prevtime + 60 * 60 * 1000) return [...acc, cv];
    else return acc;
  }
  {
    status === "success" &&
      console.log(historyData.logs.reduce(addHourif, historyData[0]));
  }
  const handleChange = (value) => {
    const date = value.value;
    setDate(date);
  };

  useEffect(() => {
    getDataFromDate(date).then((chartData) => {
      setChartData(chartData);
    });
  }, [date]);
  // console.log(item.logs[0])
  function requestApi(date) {
    // console.log(chartData);
    const labels = [9876, 4245, 2345, 3452, 6534, 132132];
    let result;
    switch (date) {
      case "hour":
        result = {
          labels,
          datasets: [
            {
              label: "Agent performance",
              // data: [status === "success" && historyData.logs[0].tankfluid],
              data: [9876, 4245, 2345, 3452, 6534, 132132],
              borderWidth: 2,
            },
          ],
        };
        break;
      case "day":
        result = {
          labels,
          datasets: [
            {
              label: "Agent performance",
              data: [3454, 4555, 4554, 5454, 4542, 6543, 3445, 4567],
              borderWidth: 2,
            },
          ],
        };
        break;
      default:
        break;
    }
    return Promise.resolve(result);
  }

  function getDataFromDate(date) {
    return requestApi(date);
  }
  return (
    <div className="card-one">
      <span className="dropdown-select">
        <Select
          options={options}
          defaultValue={defaultDate}
          onChange={handleChange}
        />
      </span>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            display: true,
            position: "bottom",
          },
        }}
        height={140}
      />
    </div>
  );
}
