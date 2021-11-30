import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { TableFooter } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  width: {
      width: '12%'
  }
});

export default function CartonsTable() {
  const [counting, setCounting] = useState(1)
  const classes = useStyles();

  const handleAdd = () => {
    setCounting(counting+1)
  }
  const handleDelete = (id) => {
    console.log(counting, 'counting')
    document.getElementById('cartons'+id).innerHTML = ''
  }
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Carton type #</TableCell>
            <TableCell>Units</TableCell>
            <TableCell>Gross weight</TableCell>
            <TableCell>Net weight</TableCell>
            <TableCell>Length</TableCell>
            <TableCell>Width</TableCell>
            <TableCell>Height</TableCell>
            <TableCell colSpan='2' className='text-center'>Products</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell className='text-center'>EAN</TableCell>
            <TableCell className='text-center'>Units</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[...Array(counting)].map((row, index) => (
            <TableRow id={'cartons'+index}>
                <TableCell>{index+1}</TableCell>
                <TableCell className={classes.width}><TextField variant="outlined" type='number' className='col-12' /></TableCell>
                <TableCell className={classes.width}><TextField variant="outlined" type='number' className='col-12' /></TableCell>
                <TableCell className={classes.width}><TextField variant="outlined" type='number' className='col-12' /></TableCell>
                <TableCell className={classes.width}><TextField variant="outlined" type='number' className='col-12' /></TableCell>
                <TableCell className={classes.width}><TextField variant="outlined" type='number' className='col-12' /></TableCell>
                <TableCell className={classes.width}><TextField variant="outlined" type='number' className='col-12' /></TableCell>
                <TableCell className={classes.width}>
                  <FormControl variant="outlined" className='col-12'>
                      <Select>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                  </FormControl>
                </TableCell>
                <TableCell className={classes.width}><TextField variant="outlined" type='number' className='col-12' /></TableCell>
                <TableCell className='text-center'><i className='fas fa-minus text-danger' onClick={(event) => handleDelete(index)} style={{cursor: 'pointer'}} ></i></TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={9}>
              <button onClick={handleAdd} className='btn btn-outline-primary'><i class="fas fa-plus"></i> Add Carton</button>
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
