import React from 'react';
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


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  width: {
      width: '12%'
  },
  smallHeading: {
      '& strong':{
          color: '#4e73df',
          fontWeight: 'bolder',
          fontSize: '1rem',
      },
      padding: '20px',
      borderBottom: '1px solid #e3e6f0',
      borderRadius: 'calc(.35rem - 1px) calc(.35rem - 1px) 0 0',
      backgroundColor: '#f8f9fc',
  },
  root: {
    boxShadow: '0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important',
    marginTop: '25px',
    borderRadius: '.35rem'
  },
});

export default function CartonsTable() {
  const classes = useStyles();

  const cartons =  [
    {id: 0, cartons: 'All cartons', invoice: 'XYZ123'},
    {id: 1, cartons: 'All cartons', invoice: 'ZYAZX'},
  ]
  const origin = [
    {id: 0, cartonId: 0, type: 1, nr: 5},
    {id: 1, cartonId: 0, type: 2, nr: 5},
    {id: 2, cartonId: 1, type: 1, nr: 5},
    {id: 3, cartonId: 1, type: 2, nr: 5},
  ]
  const content = [
    {id: 0, originId: 0, ean: 8712132312, units: 5},
    {id: 1, originId: 1, ean: 8712132312, units: 5},
    {id: 2, originId: 2, ean: 8712132312, units: 5},
    {id: 3, originId: 3, ean: 8712132312, units: 5},
  ]
  return (
    <div className={classes.root}>
      <div className={classes.smallHeading}>
          <strong>Cartons in shipment <i class="fab fa-dropbox"></i></strong>
      </div>
      <div class='container-fluid mt-4 pb-4'>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Select</TableCell>
                <TableCell>Cartons</TableCell>
                <TableCell>Invoice</TableCell>
                <TableCell colSpan='7'>Cartons at origin</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartons.map((row) => (
                <TableRow>
                    <TableCell><TextField variant="outlined" type='checkbox' className='col-7' /></TableCell>
                    <TableCell>{row.cartons}</TableCell>
                    <TableCell>{row.invoice}</TableCell>
                    <TableCell colSpan='7'>
                        <TableRow>
                          <TableCell>Select</TableCell>
                          <TableCell>Carton</TableCell>
                          <TableCell>Carton type #</TableCell>
                          <TableCell>Nr of cartons</TableCell>
                          <TableCell>Select nr of cartons</TableCell>
                          <TableCell>Carton content</TableCell>
                        </TableRow>
                        {origin.map((data)=>(
                          data.cartonId ===  row.id?
                          <TableRow>
                            <TableCell><TextField variant="outlined" type='checkbox' className='col-12' /></TableCell>
                            <TableCell>All</TableCell>
                            <TableCell>#{data.type}</TableCell>
                            <TableCell>{data.nr}</TableCell>
                            <TableCell><TextField variant="outlined" type='number' /></TableCell>
                            <TableCell colSpan='2'>
                              <TableRow>
                                <TableCell>EAN</TableCell>
                                <TableCell>Units</TableCell>
                              </TableRow>
                              {content.map((conData)=>(
                                conData.originId === data.id ?
                                <TableRow>
                                  <TableCell>{conData.ean}</TableCell>
                                  <TableCell>{conData.units}</TableCell>
                                </TableRow>
                                :null
                              ))}
                            </TableCell>
                          </TableRow>
                          :null
                        ))}
                    </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={9}>
                </TableCell>
                <TableCell className='text-right'>
                  <button className='btn btn-primary'>Save</button>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
