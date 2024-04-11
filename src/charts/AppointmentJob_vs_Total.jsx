
import React from "react";
import { Chart } from "react-google-charts";
export const options = {
    hAxis: {
      title: "Job",
      spacingBetweenLabels: 40
    },
    vAxis: {
      title: "Total",
    },
    series: {
      1: { curveType: "function" },
    },
  };
export const data = [
  ["Job", "Total"], 
  ["Driver", 200],  
  ["Plumber", 700],
  ["Carpenter", 800],
  ["Painter", 89],
  ["Chef", 52],
 
];

const JobDemandLine = () => {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  )
}

export default JobDemandLine