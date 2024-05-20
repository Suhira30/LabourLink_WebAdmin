import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import axios from 'axios';
import { Link } from "react-router-dom";
import IndividualUserDetail from "../Pages/IndividualUserDetail";

const UserNew = () => {
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
          <Link to={`/user-detail/${tableMeta.rowData[1]}`}
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "blue",
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
    rowsPerPage: 5,
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div style={{ width: '1000px', maxWidth: 'auto%', height: 'auto' }}>
      <MUIDataTable
        title={"User"}
        data={rowData}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default UserNew;
