import React from "react"
import MUIDataTable from "mui-datatables";

  export default function AppointmentsUpcomming() {
    const columns = ["User Id","Name", "Labour", "Job", "Date"];


    const data = [
      ["C001","John Walsh","Alice Johnson","Driver","2024-03-31"],
      ["C002", "James Houston","Alice Johnson", "Artist", "2024-04-08"],
      ["C045", "Bob Herm", "Emily Hernandez","Chef", "2024-04-07"],
      ["C015", "John Walsh","Olivia Anderson" ,"Driver", "2024-04-08"],
      ["C100", "Test Corp", "Michael Wilson","Artist", "2024-04-13"],
      ["C001","John Walsh","Alice Johnson","Driver","2024-03-31"],
      ["C002", "James Houston","Alice Johnson", "Artist", "2024-04-08"],
      ["C045", "Bob Herm", "Emily Hernandez","Chef", "2024-04-07"],
      ["C015", "John Walsh","Olivia Anderson" ,"Driver", "2024-04-08"],
      ["C100", "Test Corp", "Michael Wilson","Artist", "2024-04-13"],];

const options = {
  filterType: 'checkbox',
  rowsPerPage:6,
  setTableBodyProps: () => ({
    style: {
      overflow: 'auto',
      display: 'block',
    },
  }),
};

  return (
    <div style={{ width: '1000px', maxWidth: 'auto%',height:'auto'}}>

  <MUIDataTable
    title={"Upcomming Appointment"}
    data={data}
    columns={columns}
    options={options}
  />
 </div>
  
      );
}

