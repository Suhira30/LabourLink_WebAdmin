
import React from "react";
import { Chart } from "react-google-charts";
export const options = {
    hAxis: {
      title: "Date",
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
  ["Date", "Total"], 
  ["01/04", 200],  
  ["02/04", 700],
  ["03/04", 800],
  ["04/04", 89],
  ["05/04", 52],
 
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