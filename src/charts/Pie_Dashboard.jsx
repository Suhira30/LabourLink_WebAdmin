
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Job", "Order per year"],
  ["x", 10],
  ["x", 20],
  ["x", 30],
  ["x", 40],
  ["x", 50], 
];

export const options = {
  title: "Job Demand : Last Week",
  pieHole: 0.7,
  is3D: false,
  pieSliceText: 'none'
,

};

const Pie_Dashboard = () => {
   return (
     <Chart
        chartType="PieChart"
        width="auto"
        height="auto"
        data={data}
        options={options}
      />

  )
}

export default Pie_Dashboard


