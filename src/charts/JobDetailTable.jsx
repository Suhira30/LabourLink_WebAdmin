import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { BorderColor, Height } from "@mui/icons-material";
import { makeStyles } from '@mui/styles';
import { colors } from "@mui/material";

const useStyles = makeStyles({
  root: {
    '& .MuiPaper-root': {
      boxShadow: 'none', 
    },
    '& .MuiTable-root': {
      border: 'none', 
    },
    '& .MuiTableCell-root': {
      borderBottom: 'none',
    },
    '& .MuiTableFooter-root': {
      border: 'none', 
      boxShadow: 'none', 
    },
    '& .MuiTableBody-root .MuiTableCell-root': {
      paddingLeft: '35px', 
      paddingRight: '30px', 
    },
    '& .MuiTableHead-root .MuiTableCell-root': {
      background: '#f0f0f0',
      paddingTop: '5px',
      paddingBottom: '5px', 
      fontSize: '14px', 
    },
  },
});

const JobDetailTable = () => {
  const classes = useStyles(); 

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //const [rowData, setRowData] = useState([]);
  /*
  useEffect(() => {
      const fetchdata = async () =>{
          try{
          const tabledata = await appointmentService.fetchDeliveredAppointmentData();
          setRowData(tabledata.data);
          setLoading(false);
          } catch (error) {
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
    ["Driver", 10],
    ["Driver", 10],
    ["Driver", 10],
    ["Driver", 10],
    ["Driver", 10],
    ["Driver", 10],
    ["Driver", 10],
  ];

  const options = {
      selectableRows: "none",
      rowsPerPageOptions: false,
      rowsPerPage: 6,
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
      <div className={classes.root} style={{ height: "100%", width: "400px" }}>
          <MUIDataTable
              data={rowData}
              columns={columns}
              options={options}
          />
      </div>
  );
};

export default JobDetailTable;
