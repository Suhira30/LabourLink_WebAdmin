import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { BorderColor, Height } from "@mui/icons-material";
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  root: {
    '& .MuiPaper-root': {
      boxShadow: 'none', // Remove the default box shadow
    },
    '& .MuiTable-root': {
      border: 'none', // Remove the border from the table
    },
    '& .MuiTableCell-root': {
      borderBottom: 'none', // Remove the border from the table cells
    }
  }
});
const JobDetailTable = () => {
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
//const [rowData, setRowData] = useState([]);
/*
useEffect(() => {
    const fetchdata =async () =>{
        try{
        const tabledata=await appointmentService.fetchDeliveredAppointmentData();
        setRowData(tabledata.data);
        setLoading(false);
        }catch (error){
        setError(error);
        setLoading(false);
        }
    };
   fetchdata();
}, []); */

const columns = [
    { name: 'job', label: "Job" },
    { name: 'total', label: "Total" }
];
const rowData = [
  ["Driver",10],
  ["Driver",10],
  ["Driver",10],
  ["Driver",10],
  ["Driver",10],
  ["Driver",10],
  ["Driver",10],

]

const options = {
    selectableRows: "none",
    rowsPerPageOptions: false,
    rowsPerPage: 3,
    search: false,
    download: false,
    print: false,
    viewColumns: false,
    filter: false,
  };
{/*if (loading) return <div>Loading...</div>; 
if (error) return <div>Error: {error.message}</div>; 
*/}

return (
    <div style={{height:"100%",width:"400px"}}>
        <MUIDataTable
            data={rowData}
            columns={columns}
            options={options}
        />
    </div>
);
};export default JobDetailTable

