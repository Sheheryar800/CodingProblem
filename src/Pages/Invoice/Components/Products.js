import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ProductsTables from './ProductsTables';

const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: '0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important',
        marginTop: '25px',
        borderRadius: '.35rem'
    },
    heading: {
        color: '#5a5c69',
        fontSize: '1.75rem',
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
    formControl: {
        minWidth: 120,
    },
}))
function Products() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.smallHeading}>
                <strong>Products <i class="fas fa-shopping-basket"></i></strong>
            </div>
            <div class='container-fluid pb-4'>
                <div className='row'>
                    <div className='col-12 col-md-6 mt-4 mb-4'>
                        <FormControl variant="outlined" className='col-12 col-md-6 col-12'>
                        <InputLabel>Starting location</InputLabel>
                            <Select label='Starting Location'>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className='col-12 col-md-6 mt-4 mb-4'>
                        <FormControl variant="outlined" className='col-12 col-md-6 col-12'>
                        <InputLabel>Future shipment</InputLabel>
                            <Select label='Future shipment'>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <ProductsTables />
            </div>
        </div>
    )
}

export default Products
