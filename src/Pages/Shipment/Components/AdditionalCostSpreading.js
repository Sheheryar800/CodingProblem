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
        width: '11.111111111%'
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

export default function AdditionalCostSpreading() {
  const classes = useStyles();
  const costs = [
    {ean: 873121112112, name: 'Test product', units: 100, productUnitPrice: 612, volumeCostsPerUnit: 112, dutiesCodeCostsPerUnit: 32, importDutiesPerUnit: 50, totalUnitCosts: 806, totalValue: 906},
    {ean: 873121112112, name: 'Test product', units: 100, productUnitPrice: 612, volumeCostsPerUnit: 112, dutiesCodeCostsPerUnit: 32, importDutiesPerUnit: 50, totalUnitCosts: 806, totalValue: 906},
    {ean: 873121112112, name: 'Test product', units: 100, productUnitPrice: 612, volumeCostsPerUnit: 112, dutiesCodeCostsPerUnit: 32, importDutiesPerUnit: 50, totalUnitCosts: 806, totalValue: 906},
  ]
  
  return (
    <div className={classes.root}>
        <div className={classes.smallHeading}>
            <strong>Additional costs Spreading</strong>
        </div>
        <div class='container-fluid mt-4 pb-4'>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>EAN</TableCell>
                    <TableCell>Product name</TableCell>
                    <TableCell>Units</TableCell>
                    <TableCell>Product unit price</TableCell>
                    <TableCell>Volume costs / unit</TableCell>
                    <TableCell>Duties code costs / unit</TableCell>
                    <TableCell>Import duties / unit</TableCell>
                    <TableCell>Total unit costs</TableCell>
                    <TableCell>Total value</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {costs.map((data) => (
                    <TableRow>
                        <TableCell className={classes.width}>{data.ean}</TableCell>
                        <TableCell className={classes.width}>{data.name}</TableCell>
                        <TableCell className={classes.width}>{data.units}</TableCell>
                        <TableCell className={classes.width}>€ {data.productUnitPrice}</TableCell>
                        <TableCell className={classes.width}>€ {data.volumeCostsPerUnit}</TableCell>
                        <TableCell className={classes.width}>€ {data.dutiesCodeCostsPerUnit}</TableCell>
                        <TableCell className={classes.width}>€ {data.importDutiesPerUnit}</TableCell>
                        <TableCell className={classes.width}>€ {data.totalUnitCosts}</TableCell>
                        <TableCell className={classes.width}>€ {data.totalValue}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    </div>
  );
}
