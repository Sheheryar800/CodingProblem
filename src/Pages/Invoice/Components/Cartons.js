import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CartonsTable from './CartonsTable';

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
function Cartons() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.smallHeading}>
                <strong>Cartons <i class="fab fa-dropbox"></i></strong>
            </div>
            <div class='container-fluid mt-4 pb-4'>
                <CartonsTable />
            </div>
        </div>
    )
}

export default Cartons
