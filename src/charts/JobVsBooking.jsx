import React, { useEffect, useState } from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import jobService from '../Pages/Service/jobService';


function JobVsBooking() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await jobService.fetchJobRoleVsBooking();
        console.log(data);
        // Format data into expected format for PieChart: [['Job Role', 'Count'], ['Electrician', 72], ['Welder', 72], ...]
        const formattedData = Object.keys(data).map((key, index) => ({
          id: index,
          value: data[key],
          label: key,
        }));
        setChartData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px',marginLeft:"80px" }}>
    <PieChart
     colors={['#cc0444', '#03256c', '#03cea4','#7a7317','#610402','#cb8927','#5f0a87','#e9ff70']} 
      series={[
        {
          arcLabel: (item) => `${item.label} (${item.value})`,
          arcLabelMinAngle: 45,
          data: chartData,
        },
      ]}
      width={400}
      height={400}
      sx={{
        [`& .MuiChartsLegend-root`]: {
          display: 'none', // Hide the legend element
        },
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold', // Ensure labels are styled as desired
        },
      }}
    />
  </div>
);
}

export default JobVsBooking;
