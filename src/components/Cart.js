import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { OrderList } from './Product';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.error.light,
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

function createData(product, qty, price) {
  return { product, qty, price };
}

const createTotal = (qty, total) => {
  return createData('Total', qty, total);
}

export default function ShoppingCart() {
  const rows = [];
  let sum = 0;
  let num = 0
  OrderList.map((el) => {
    sum = sum + (Number(el.price)*el.qty);
    rows.push(createData(el.product, el.qty, el.price));
    num = num + el.qty;
  })
  rows.push(createTotal(num, sum));


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product </StyledTableCell>
            <StyledTableCell align="right">Qty</StyledTableCell>
            <StyledTableCell align="right">Price&nbsp;(AUD)</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.product}>
              <StyledTableCell component="th" scope="row">
                {row.product}
              </StyledTableCell>
              <StyledTableCell align="right">{row.qty}</StyledTableCell>
              <StyledTableCell align="right"> ${row.price}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}