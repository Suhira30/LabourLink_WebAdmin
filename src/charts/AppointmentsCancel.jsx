import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import appointmentService from "../Pages/Service/appointmentService";

const AppointmentsCancel = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [rowData, setRowData] = useState([]);
    
    useEffect(() => {
        const fetchdata=async()=>{
            try{
                const tabledata=await appointmentService.fetchCancelledAppointmentData();
                setRowData(tabledata.data);
                setLoading(false);
            }catch(error){
                setError(error);
                setLoading(false);
            }
        };
        fetchdata();
    } ,[]);
    const columns = [
        { name: 'id', label: "Number" },
        { name: 'customerName', label: "Customer" },
        { name: 'customerEmail', label: "Customer Email" },
        { name: 'labourName', label: "Labour" },
        { name: 'jobTitle', label: "Job" },
        
    ];

    const options = {
        selectableRows: "none",
        rowsPerPageOptions: [5, 10, 15],
        rowsPerPage: 5,
    };

    if (loading) return <div>Loading...</div>; 
    if (error) return <div>Error: {error.message}</div>; 

    return (
        <div style={{ width: '1000px', maxWidth: 'auto%', height: 'auto' }}>
            <MUIDataTable
                title={"Cancelled Appointments"}
                data={rowData}
                columns={columns}
                options={options}
            />
        </div>
    );
};

export default AppointmentsCancel;
