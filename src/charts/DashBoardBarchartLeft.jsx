import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import dashboardService from '../Pages/Service/dashboardService';

export default function DashBoardBarchartLeft() {
  const [dataFromBackend, setDataFromBackend] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const chartData = await dashboardService.fetchActiveCustomerData();
        setDataFromBackend(chartData);
      } catch (error) {
        console.error("Error fetching active customer data:", error);
      }
    };

    fetchData();
  }, []);
  const options = {
    chart: {
      title: "Days vs Active Customers",
      hAxis: { title: "Days" },
      vAxis: { title: "Active Customers" },
    },
    // animation: {
    //   startup: true, // This enables the animation when the chart is first drawn
    //   easing: 'inAndOut', // Animation type
    //   duration: 1000, // Animation duration in milliseconds
    // },
    bars: 'verti', // Make bars horizontal (optional)
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
