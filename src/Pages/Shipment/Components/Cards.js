import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: '0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important',
        borderRadius: '7px',
    },
    mainBlue:{
        borderLeft: '.25rem solid #4e73df',
    },
    blue:{
        color: '#4e73df',
        fontWeight: 'bold'
    },
    mainGreen:{
        borderLeft: '.25rem solid #1cc88a',
    },
    green:{
        color: '#1cc88a',
        fontWeight: 'bold'
    },
    iconColor:{
        color: '#dddfeb',
        fontSize: '25px'
    },
}))
function Cards() {
    const classes = useStyles();
    return (
        <Card className={clsx(classes.root, classes.mainBlue, 'pr-3 col-12')}>
            <CardContent className='row' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className='col'>
                    <p className={clsx(classes.blue, 'p-o m-0')}>Finalized?</p>
                    <h4 className={classes.iconColor}><i className='fas fa-times'></i></h4>
                </div>
                <div className='col text-right ml-auto'>
                    <button className='btn btn-outline-primary'>Finalize shipment</button>
                </div>
            </CardContent>
        </Card>
    )
}

export default Cards
