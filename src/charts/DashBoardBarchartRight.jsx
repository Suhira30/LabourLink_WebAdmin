import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import dashboardService from '../Pages/Service/dashboardService';

export default function DashBoardBarchartRight() {
  const [dataFromBackend, setDataFromBackend] = useState([]);
  useEffect(() => {
  const fetchData = async () => {
      try {
        const chartData = await dashboardService.fetchActiveLabourData();
        setDataFromBackend(chartData);
      } catch (error) {
        console.error("Error fetching active customer data:", error);
      }
    };    
    fetchData();
  }, []);

  const options = {
    chart: {
      title: "Days vs Active labours",
      hAxis: { title: "Days" ,
     },
    },
  };
  return (
    <div>
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={dataFromBackend}
        options={options}
      />
  </div>
  );
}
