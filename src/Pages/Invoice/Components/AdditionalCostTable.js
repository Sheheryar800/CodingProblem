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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  width: {
      width: '25%'
  }
});

export default function AdditionalCostTable() {
  const [counting, setCounting] = useState(1)
  const classes = useStyles();

  const handleAdd = () => {
    setCounting(counting+1)
  }
  const handleDelete = (id) => {
    document.getElementById('cost'+id).innerHTML = ''
  }
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Shipment</TableCell>
            <TableCell>Spread by</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[...Array(counting)].map((row, index) => (
            <TableRow id={'cost'+index}>
                <TableCell className={classes.width}>
                  <FormControl variant="outlined" className='col-12'>
                      <InputLabel>Shipment</InputLabel>
                      <Select label='Shipment'>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                  </FormControl>
                </TableCell>
                <TableCell className={classes.width}><FormControl variant="outlined" className='col-12'>
                            <InputLabel>Spread by</InputLabel>
                            <Select label='Spread by'>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                </TableCell>
                <TableCell className={classes.width}><TextField variant="outlined" className='col-12' /></TableCell>
                <TableCell className={classes.width}><TextField variant="outlined" className='col-12' /></TableCell>
                <TableCell className='text-center'><i className='fas fa-minus text-danger' onClick={(event) => handleDelete(index)} style={{cursor: 'pointer'}} ></i></TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>
              <button onClick={handleAdd} className='btn btn-outline-primary'><i class="fas fa-plus"></i> Add Cost</button>
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
