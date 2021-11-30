import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Creatable from './Creatable';
import TextField from '@material-ui/core/TextField';
import { TableFooter } from '@material-ui/core';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  width: {
    width: '16.666666667%'
  }
});

export default function ProductsTables() {
  const [count, setCount] = useState(1)
  const classes = useStyles();

  const handleAdd = () => {
    setCount(count+1)
  }
  const handleDelete = (id) => {
    document.getElementById(id).innerHTML = ''
  }
  console.log([...Array(count)])
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>EAN</TableCell>
            <TableCell>Product name</TableCell>
            <TableCell>Duties code</TableCell>
            <TableCell>Duties %</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Unit price</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[...Array(count)].map((row, index) => (
            <TableRow id={index}>
              <TableCell className={classes.width}><Creatable className='col-12' /></TableCell>
              <TableCell className={classes.width}><TextField className='col-12' variant="outlined" /></TableCell>
              <TableCell className={classes.width}><Creatable className='col-12' /></TableCell>
              <TableCell className={classes.width}><TextField className='col-12' variant="outlined" /></TableCell>
              <TableCell className={classes.width}><TextField className='col-12' variant="outlined" /></TableCell>
              <TableCell className={classes.width}><TextField className='col-12' variant="outlined" /></TableCell>
              <TableCell className='text-center'><i className='fas fa-minus text-danger' onClick={(event) => handleDelete(index)} style={{cursor: 'pointer'}} ></i></TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={6}>
              <button onClick={handleAdd} className='btn btn-outline-primary'><i class="fas fa-plus"></i> Add Product</button>
            </TableCell>
            <TableCell>
              <button className='btn btn-primary'>Save</button>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
