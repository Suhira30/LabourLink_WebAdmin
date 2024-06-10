import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import appointmentService from "../Pages/Service/appointmentService";

const AppointmentCancelled_vs_Total = () => {
  const [dataFromBackend, setDataFromBackend] = useState([]);

useEffect(()=>{
const fetchData=async() => {
  try {
    const chatdata =appointmentService.fetchCancelledAppointmentVsTotal(); 
     setDataFromBackend(chatdata);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
fetchData();
},[]);
const options = {
  chart: {
    title: "Cancelled Appointment vs Total ",
    hAxis: {
      title: "Total",
    },
    vAxis: {
      title: "Job",
    },
  },
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
export default AppointmentCancelled_vs_Total