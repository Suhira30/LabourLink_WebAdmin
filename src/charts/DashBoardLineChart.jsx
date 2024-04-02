

import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["x", "Order"],
  ["Mon", 0],
  ["Tues", 10],
  ["Thu", 23],
  ["Fri", 17],
  ["Sat", 18],
  ["Sun", 9]
];

export const options = {
  hAxis: {
    title: "Day",
  },
  vAxis: {
    title: "Total Order",
  },
  series: {
    1: { curveType: "function" },
  },
};

export default function DashBoardOrder() {
  return (
    <Chart
    chartType="LineChart"
    width="100%"
    height="100%"
    data={data}
    options={options}
  />
  );
}


