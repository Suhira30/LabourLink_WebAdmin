import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";

export default function DashBoardBarchartRight() {
  const [dataFromBackend, setDataFromBackend] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:1000/app/dashboard/g_active_l");
      const formattedData = response.data.reduce((acc, item) => {
        acc[item[0]] = parseInt(item[1]);
        return acc;
      }, {});

      const daysOrder = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const chartData = [['Days', 'Total']];
      daysOrder.forEach(day => {
        chartData.push([day, formattedData[day] || 0]);
      });

      setDataFromBackend(chartData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const options = {
    chart: {
      title: "Days vs Active Customers",
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
