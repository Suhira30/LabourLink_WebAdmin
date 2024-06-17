import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { Link } from "react-router-dom";
import userService from "../Pages/Service/userService";

export default function UserDeactivate() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    const fetchdata=async () => {
        try{
            const tabledata=await userService.fetchSuspendedUsers();
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
    { name: 'name', label: "User Name" },
    { name: 'email', label: "Email" },
    { name: 'joinDate', label: "Join Date" },
    { name: 'role', label: "Role" },
    {
      name: 'View',
      label: "View",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => (
          <Link to={`/suspenduser-detail/${tableMeta.rowData[1]}`}
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            textDecoration: "none",
            cursor: "pointer",
          }}>
            View</Link>
          
        )
      }
    }
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
        title={"Suspendend User"}
        data={rowData}
        columns={columns}
        options={options}
      />
    </div>
  );
};


