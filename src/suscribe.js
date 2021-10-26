
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#4F4F4F',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(fecha, referencia, automatizacion, estado, valor) {
  return { fecha, referencia, automatizacion, estado, valor };
}

const rows = [
  createData('18/09/2017 9:51:00', 'REF-123', '951234', 'Aprovada', '25.000'),
  createData('18/09/2017 9:51:00', 'REF-123', '951234', 'Aprovada', '25.000'),
  createData('18/09/2017 9:51:00', 'REF-123', '951234', 'Aprovada', '25.000'),
  createData('18/09/2017 9:51:00', 'REF-123', '951234', 'Aprovada', '25.000'),
  createData('18/09/2017 9:51:00', 'REF-123', '951234', 'Aprovada', '25.000'),
];

export default function CustomizedTables() {
  return (
      <div style={{backgroundColor: '#E0E0E0', height: '100vh', paddingTop: '60px'}}>

        <div className="table">
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>fecha</StyledTableCell>
                    <StyledTableCell align="center">referencia</StyledTableCell>
                    <StyledTableCell align="center">automatizacion</StyledTableCell>
                    <StyledTableCell align="center">estado</StyledTableCell>
                    <StyledTableCell align="center">valor</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <StyledTableRow key={row.fecha}>
                    <StyledTableCell component="th" scope="row">
                        {row.fecha}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.referencia}</StyledTableCell>
                    <StyledTableCell align="center">{row.automatizacion}</StyledTableCell>
                    <StyledTableCell align="center">{row.estado}</StyledTableCell>
                    <StyledTableCell align="center">{row.valor}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
          </div>
    </div>
  );
}


