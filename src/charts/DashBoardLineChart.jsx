
import React, { useEffect ,useState} from "react";
import { Chart } from "react-google-charts";
import dashboardService from '../Pages/Service/dashboardService';

const DashBoardLineChart = () => {
  const [dataFromBackend, setDataFromBackend] = useState([]);

useEffect(()=>{
const fetchData=async() => {
  try {
    const chartData = await dashboardService.fetchTotalAppointmentPerDay();
    setDataFromBackend(chartData);
  } catch (error) {
    console.error("Error fetching fetch total appointment per day:", error);
  }
};    
fetchData();
}, []);
const options = {
  title:"Day vs Total Appointment",

  hAxis: {
    title: "Day",
    slantedTextAngle: 90,
    textStyle: {
      fontSize: 10,
    },
    gridlines: {
      count: -1,
    },
    minorGridlines: {
      count: 0,
    },
  },
  vAxis: {
    title: "Appointment total",
  },
  series: {
    1: { curveType: "function" },
  },
  legend: 'none',
};

  return (
    <Chart
    chartType="LineChart"
    width="100%"
    height="400px"
    data={dataFromBackend} 
    options={options}
    />
  )
}

export default DashBoardLineChart