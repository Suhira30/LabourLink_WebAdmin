import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const columns = [
  { id: 'Job', label: 'Total', minWidth: 170 }]

function createData(Job, Total) {
  return { Job, Total };
}

const rows = [
  createData('Driver', 159),
  createData('Plumber', 237),
  createData('Carpenter', 262),
  createData('Painter', 305),
  createData('Chef', 356),
 
];
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: '30px', // Adjust padding to reduce the space between columns
}));

const StyledTableHead = styled(TableHead)({
  backgroundColor: '#f0f0f0', 
});

export default function TableJobDetail() {
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 'auto' }} aria-label="simple table">
        <StyledTableHead>
          <TableRow>
            <TableCell>Job</TableCell>
            <TableCell align="center">Total Labour</TableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Job}>
              <TableCell component="th" scope="row">
                {row.Job}
              </TableCell>
              <TableCell align="center">{row.Total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
