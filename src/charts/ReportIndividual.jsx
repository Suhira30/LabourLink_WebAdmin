import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";

import reportService from "../Pages/Service/reportService";

const ReportIndividual = ({user}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    const fetchdata=async () => {
        try{
            const tabledata=await reportService.fetchReportData(user);
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

    {label:"Reported By", name: 'reportedByName' },
    { label:"Reported To",name: 'reportedToName' },
    { label:"Description",name: 'description' },
  
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
        title={" Reports"}
        data={rowData}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default ReportIndividual;
