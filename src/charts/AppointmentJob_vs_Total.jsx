import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import appointmentService from "../Pages/Service/appointmentService";

const AppointmentJob_vs_Total = () => {
  const [dataFromBackend, setDataFromBackend] = useState([]);

useEffect(()=>{
const fetchData = async () => {
  try {
    const chartdata = await appointmentService.fetchAppointmentVsTotal(); 
     setDataFromBackend(chartdata);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
  fetchData();
},[]);
    const options = {
      chart: {
        title: "Appointment vs Total ",
        hAxis: {
          title: "Total",
        },
        vAxis: {
          title: "Job",
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
  )
}

export default AppointmentJob_vs_Total