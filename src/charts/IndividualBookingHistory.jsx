import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { Link } from "react-router-dom";
import IndividualUserDetail from "../Pages/IndividualUserDetail";
import userService from "../Pages/Service/userService";

const IndividualBookingHistory = ({user}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    const fetchdata=async () => {
        try{
            const tabledata=await userService.fetchBookingData(user);
            console.log('Fetched data:', tabledata); 
            setRowData(tabledata);
            setLoading(false);
           }catch(error){
            setError(error);
            setLoading(false);
           }
    };
    fetchdata();
    },[]);

  const columns = [
    { name: 'customer' },
    { name: 'jobRole' },
    { name: 'jobDescription' },
    { name: 'date' },
    { name: 'startTime' }
  ];

  const options = {
    selectableRows: "none",
    rowsPerPageOptions: [5, 10, 15],
    rowsPerPage: 4,
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div style={{ width: '1000px', maxWidth: 'auto%', height: 'auto' }}>
      <MUIDataTable
        title={" Booking History"}
        data={rowData}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default IndividualBookingHistory;
