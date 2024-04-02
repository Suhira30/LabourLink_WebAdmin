
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Job", "Order per year"],
  ["Driver", 500],
  ["Carpenter", 210],
  ["Plumber", 109],
  ["Mechanic", 98],
  ["Delivery", 317], 
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
        width="83%"
        height="90%"
        data={data}
        options={options}
      />

  )
}

export default Pie_Dashboard


