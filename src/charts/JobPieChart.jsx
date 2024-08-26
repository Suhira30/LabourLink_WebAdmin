import React, { useEffect, useState } from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import jobService from '../Pages/Service/jobService';

export default function PieArcLabel() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await jobService.fetchLabourJobCountsForPie();
        // Format data into the expected format for PieChart: [{ id: 0, value: 72, label: 'Electrician' }, ...]
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
    <div style={{ justifyContent: 'center', alignItems: 'center', height: '400px',marginLeft:"85px" ,backgroundColor:"none"}}>
          <div style={{ 
        fontSize: '18px', 
        color: 'rgba(57,57,57,1)', 
        fontWeight:'200',
        marginLeft:"55px",
        marginBottom:'-20px',
        paddingTop:"15px",
      }}>
        Job Roles vs Labour
      </div>

    <PieChart
     colors={['#ba181b', '#390099', '#eb5e28','#cbdfbd','#1982c4','#ffbd00','#4d194d','#e9ff70']} 
      series={[
        {
          arcLabel: (item) => `${item.label}`,
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
          fill: 'white',fontSize:"12px"
        },
      }}
    />
  </div>
);
}
