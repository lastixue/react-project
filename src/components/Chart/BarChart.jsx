import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Line } from "react-chartjs-2";
import { useQuery } from "react-query";
import { getHourHistory, getWeekHistory } from "../../../apitest/api";
import moment from "moment";
const options = [
  { label: "Today", value: "day" },
  { label: "This week", value: "week" },
];
export default function BarChart() {
  const { data: historyHourData, status: historyHourStatus } = useQuery(
    "hourHistory",
    getHourHistory
  );
  const { data: historyWeekData, status: historyWeekStatus } = useQuery(
    "weekHistory",
    getWeekHistory
  );
  const historyWeekDatas =
    historyWeekStatus === "success" &&
    historyWeekData.logs.filter(
      (datas) =>
        parseInt(datas.timestamp.split(":")[1]) === 0 &&
        parseInt(datas.timestamp.split("T")[1]) === 0
    ); //last week
  const historyHourDatas =
    historyHourStatus === "success" &&
    historyHourData.logs.filter(
      (datas) => parseInt(datas.timestamp.split(":")[1]) === 0
    ); //last day

  const defaultDate = options[0];
  const [defaultData, setDefaultData] = useState({});
  const [date, setDate] = useState(defaultDate.value);
  const [chartData, setChartData] = useState(defaultData);
  function requestApi(date) {
    let result;
    switch (date) {
      case "day":
        result = {
          labels:
            historyHourStatus === "success" &&
            historyHourDatas.map((v) =>
              moment(v.timestamp).format("YYYY-MM-DD-HH")
            ),
          // labels: [1, 2, 3, 4, 5],
          datasets: [
            {
              label: "土壤濕度",
              data:
                historyHourStatus === "success" &&
                historyHourDatas.map((v) => v.moisture),
              // data: [1, 2, 3, 4, 5],
              borderWidth: 7,
              backgroundColor: "#9BCFB8",
              borderColor: "#9BCFB8",
              pointHoverBackgroundColor: "#fefefe",
              pointBorderColor: "#9BCFB8",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 2,
              pointHoverRadius: 5,
              pointHoverBorderWidth: 2,
              pointRadius: 7,
              pointHitRadius: 10,
              fill: false,
            },
            {
              label: "光照程度",
              data:
                historyHourStatus === "success" &&
                historyHourDatas.map((v) => v.lux),
              // data: [1, 2, 3, 4, 5],
              borderWidth: 7,
              backgroundColor: "#bfbb5e",
              borderColor: "#bfbb5e",
              pointBorderColor: "#bfbb5e",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 2,
              pointHoverRadius: 5,
              pointHoverBorderWidth: 2,
              pointRadius: 7,
              pointHitRadius: 10,
              fill: false,
            },
            {
              label: "水箱容量",
              data:
                historyHourStatus === "success" &&
                historyHourDatas.map((v) => v.tankfluid),
              // data:[1,2,3,4,5],
              borderWidth: 7,
              backgroundColor: "#85B8CB",
              borderColor: "#85B8CB",
              pointBorderColor: "#85B8CB",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 2,
              pointHoverRadius: 5,
              pointHoverBorderWidth: 2,
              pointRadius: 7,
              pointHitRadius: 10,
              fill: false,
            },
          ],
        };
        break;
      case "week":
        result = {
          labels:
            historyWeekStatus === "success" &&
            historyWeekDatas.map((v) =>
              moment(v.timestamp).format("YYYY-MM-DD")
            ),
          datasets: [
            {
              label: "土壤濕度",
              data:
                historyWeekStatus === "success" &&
                historyWeekDatas.map((v) => v.moisture),
              borderWidth: 7,
              backgroundColor: "#9BCFB8",
              borderColor: "#9BCFB8",
              pointHoverBackgroundColor: "#fefefe",
              pointBorderColor: "#9BCFB8",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 2,
              pointHoverRadius: 5,
              pointHoverBorderWidth: 2,
              pointRadius: 7,
              pointHitRadius: 10,
              fill: false,
            },
            {
              label: "光照程度",
              data:
                historyWeekStatus === "success" &&
                historyWeekDatas.map((v) => v.lux),
              borderWidth: 7,
              backgroundColor: "#bfbb5e",
              borderColor: "#bfbb5e",
              pointBorderColor: "#bfbb5e",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 2,
              pointHoverRadius: 5,
              pointHoverBorderWidth: 2,
              pointRadius: 7,
              pointHitRadius: 10,
              fill: false,
            },
            {
              label: "水箱容量",
              data:
                historyWeekStatus === "success" &&
                historyWeekDatas.map((v) => v.tankfluid),
              borderWidth: 7,
              backgroundColor: "#85B8CB",
              borderColor: "#85B8CB",
              pointBorderColor: "#85B8CB",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 2,
              pointHoverRadius: 5,
              pointHoverBorderWidth: 2,
              pointRadius: 7,
              pointHitRadius: 10,
              fill: false,
            },
          ],
        };
        break;
      default:
        break;
    }
    return Promise.resolve(result);
  }
  const handleChange = (value) => {
    const date = value.value;
    setDate(date);
  };
  function getDataFromDate(date) {
    return requestApi(date);
  }
  useEffect(() => {
    const getTest = async () => {
      await getDataFromDate(date).then((chartData) => {
        setChartData(chartData);
      });
    };
    getTest();
  }, [date,historyWeekData,historyHourData]);
  return (
    <>
      <Select
        options={options}
        defaultValue={defaultDate}
        onChange={handleChange}
      />
      <Line
        data={chartData}
        options={{
          responsive: true,
          scales: {
            yAxes: [
              {
                type: "linear",
                position: "left",
              },
            ],
          },
        }}
        height={140}
      />
    </>
  );
}
