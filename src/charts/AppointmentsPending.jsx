import React from "react"
import MUIDataTable from "mui-datatables";
import { useEffect, useState } from "react";
import axios from 'axios';

const AppointmentsCancel= () => {
   
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [rowData, setRowData] = useState([]);
  
    useEffect(() => {
      axios.get("http://localhost:1000/user")
        .then((response) => {
          setRowData(response.data);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);
  
    const handleViewClick = (rowData) => {
      // Handle view button click logic here, using rowData if needed
      console.log("View button clicked!", rowData);
    };
  
    const columns = [
      { name: 'name', label: "Customer" },
      { name: 'email', label: "Email" },
      { name: 'joinDate', label: "Labour" },
      { name: 'role', label: "Job" },
      { name: 'role', label: "venue" },
      { name: 'role', label: "time" },
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
          title={"Pending Appointments"}
          data={rowData}
          columns={columns}
          options={options}
        />
      </div>
    );
  };
  
  export default AppointmentsCancel;