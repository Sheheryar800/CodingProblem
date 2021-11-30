import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
        width: '100%'
    },
    width: {
        width: '33.33337%'
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

export default function AdditionalCost() {
  const classes = useStyles();
  const costs = [
    {spread: 'Volume', description: 'Container shipping cost', amount: 121212},
    {spread: 'Duties code quantity', description: 'HS code costs', amount: 14212},
    {spread: 'Import duties', description: 'Import duties for shipment', amount: 50454},
  ]
  
  return (
    <div className={classes.root}>
        <div className={classes.smallHeading}>
            <strong>Additional costs</strong>
        </div>
        <div class='container-fluid mt-4 pb-4'>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Spread by</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Amount</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {costs.map((data) => (
                    <TableRow>
                        <TableCell className={classes.width}>{data.spread}</TableCell>
                        <TableCell className={classes.width}>{data.description}</TableCell>
                        <TableCell className={classes.width}>€ {data.amount}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    </div>
  );
}
