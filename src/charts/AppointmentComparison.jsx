import React, { useEffect, useState } from "react";
import { BarChart } from '@mui/x-charts/BarChart';
import appointmentService from '../Pages/Service/appointmentService';

export default function AppointmentComparison() {
    const [chartData, setChartData] = useState({
        series: [],
        xAxis: []
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await appointmentService.fetchAppointmentVsTotal();
                const data = response.data;

                // Transform the data
                const jobRoles = data.map(item => item.jobRole);
                const totalCounts = data.map(item => item.totalCount);
                const pendingCounts = data.map(item => item.pendingCount);
                const acceptedCounts = data.map(item => item.acceptedCount);
                const completedCounts = data.map(item => item.completedCount);
                const declinedCounts = data.map(item => item.declinedCount);

                setChartData({
                    series: [
                        { label: 'Total', data: totalCounts },
                        { label: 'Pending', data: pendingCounts },
                        { label: 'Accepted', data: acceptedCounts },
                        { label: 'Completed', data: completedCounts },
                        { label: 'Declined', data: declinedCounts },
                    ],
                    xAxis: [{ data: jobRoles, scaleType: 'band' }]
                });

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div style={{ width: '100%', height: 400 }}>
            <BarChart
                series={chartData.series}
                xAxis={chartData.xAxis}
                height={400}
                //margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
                
            />
        </div>
    );
}
