import React from "react"
import MUIDataTable from "mui-datatables";
import { Link } from "react-router-dom";
import { ReportGmailerrorred } from "@mui/icons-material";

  export default function UserDeactivate() {
    const columns = [{ name: 'name', label: "User Name" },
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
    const data = [
      ["Joe James", "James@gmail.com", "2020-05-09", "Customer"],
      ["John ", "Test@gmail.com", "2024-02-08", "Labour"],
    ];
    const options = {
      selectableRows: "none",
      rowsPerPageOptions: [5, 10, 15],
      rowsPerPage: 5,
    };

  return (
  <div style={{ width: '1000px', maxWidth: 'auto%',height:'auto'}}>
  <MUIDataTable
    title={"Deactivated User"}
    data={data}
    columns={columns}
    options={options}
  />
 </div>
);
}

