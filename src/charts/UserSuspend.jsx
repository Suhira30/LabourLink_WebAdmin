import React from "react"
import MUIDataTable from "mui-datatables";
import { Link } from "react-router-dom";

export default function UserDeactivate() {
const data = [
 ["James", "Test@gmail.com", "2020-08-07", "Customer"],
 ["John Walsh", "Corp@gmail.com", "2021-04-03", "Labour"],
 ["Bob Herm", "orp@gmail.com", "2023-05-09", "Customer"],
 ["James Houston", "Tcp@gmail.com", "2010-08-04", "Customer"],
];
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
  rowsPerPage: 5,
};

return (
<div style={{ width: '1000px', maxWidth: 'auto%',height:'auto'}}>
  <MUIDataTable
    title={"Suspend User"}
    data={data}
    columns={columns}
    options={options}
  />
</div>
);
}

