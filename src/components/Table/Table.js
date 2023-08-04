import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Header({ columns }) {
  if (!columns) {
    return null;
  }
  return (
    <TableHead>
      <TableRow>
        {columns.map((title) => (
          <TableCell>{title}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
export default function BaseTable({ columns, data }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 450 }}>
        <Header columns={columns} />
        <TableBody>
          {data?.map((row, index) => (
            <TableRow key={index}>
              {row.map((item) => (
                <TableCell>{item}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
