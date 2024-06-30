import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import jobService from "../Pages/Service/jobService";

const options = {
  legend: "none",
  pieSliceText: "label",
  title: "Job Roles vs Labour count",
  pieStartAngle: 100,
};

function JobPieChart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await jobService.fetchLabourJobCountsForPie();
        // Format data into expected format for PieChart: [['Job Role', 'Count'], ['Electrician', 72], ['Welder', 72], ...]
        const formattedData = [["Job Role", "Count"]]; // Initial array with headers
        for (const key in data) {
          formattedData.push([key, data[key]]);
        }
        setChartData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Chart
      chartType="PieChart"
      data={chartData}
      options={options}
      width={"auto"}
      height={"400px"}
    />
  );
}

export default JobPieChart;
