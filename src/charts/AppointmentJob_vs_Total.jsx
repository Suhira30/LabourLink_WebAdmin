
import React, { useEffect ,useState} from "react";
import { Chart } from "react-google-charts";
import axios from "axios";


const AppointmentJob_vs_Total = () => {
  const [dataFromBackend, setDataFromBackend] = useState([]);

useEffect(()=>{
  fetchData();
},[]);
const fetchData=async() => {
  try {
    const response = await axios.get("http://localhost:1000/app/graphleft"); 
     const formattedData = response.data.map(item => [item[0], parseInt(item[1])]);
     setDataFromBackend([["Job", "Total"], ...formattedData]);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
const options = {
  title:"Job vs Total Appointment",
  titleTextStyle: {
    fontSize: 16,
    bold: true,
 
    textAlign: 'center', 
  },
  hAxis: {
    title: "Job",
    slantedTextAngle: 90,
    textStyle: {
      fontSize: 10, 
    },
  },
  vAxis: {
    title: "Total",
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

export default AppointmentJob_vs_Total