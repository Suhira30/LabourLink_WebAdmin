import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Month", "2022", "2023"],
  ["Jan", 1000, 400],
  ["Feb", 1170, 460],
  ["Mar", 660, 1120],
  ["Apr", 1030, 540],
  ["May", 1000, 940],
  ["June", 520, 890],
  ["July", 1450, 540],
  ["Augu", 1200, 980],
  ["Sep", 1000, 240],
  ["Oct", 700, 1240],
  ["Nov", 780, 1000],
  ["Dec", 1350, 989],
];

export const options = {
  title: "Revenue Detail",
  curveType: "function",
  legend: { position: "bottom" },
};

export function Revenue() {
  return (
    <Chart
      chartType="LineChart"
      width="900px"
      height="300px"
      data={data}
      options={options}
      
    />
  );
}
