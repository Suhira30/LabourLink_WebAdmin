import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import jobService from "../Pages/Service/jobService";
const PieDashboard = () => {
  const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [labourJobCounts, setLabourJobCounts] = useState([]);

  useEffect(() => {
   
    
    const fetchdata = async () =>{
        try{
        const tabledata = await jobService.fetchLabourJobCountsForPie();
        console.log('Fetched data:', tabledata); 
        setLabourJobCounts(tabledata);
        setLoading(false);
        } catch (error) {
        setError(error);
        setLoading(false);
        }
    };
  fetchdata();
}, []); 
  const convertDataForChart = () => {
    const chartData = [
      ["Job", "Labour Count"]
    ];
    labourJobCounts.forEach(job => {
      chartData.push([job[0], job[1]]);
    });
    return chartData;
  };

  const options = {
    title: "Job Demand : Last Week",
    pieHole: 0.7,
    is3D: false,
    pieSliceText: 'none'
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={convertDataForChart()}
      options={options}
    />
  );
};

export default PieDashboard;
