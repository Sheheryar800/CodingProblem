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
        fontSize: '40px'
    },
}))
function Cards() {
    const classes = useStyles();
    return (
        <div className='row'>
            <div className='col-md-6 mt-4'>
                <Card className={clsx(classes.root, classes.mainBlue, 'pr-3')}>
                    <CardContent className='row' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div className='col-9'>
                            <p className={clsx(classes.blue, 'p-o m-0')}>TOTAL INVOICE AMOUNT</p>
                            <h4><strong>€ 5121,91</strong></h4>
                        </div>
                        <div className='col-2 ml-auto'>
                            <i class={clsx(classes.iconColor,'fas fa-file-invoice')}></i>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className='col-md-6 mt-4'>
                <Card className={clsx(classes.root, classes.mainGreen, 'pr-3')}>
                    <CardContent className='row' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div className='col-9'>
                            <p className={clsx(classes.green, 'p-o m-0')}>UNMACHTED AMOUNT
</p>
                            <h4><strong>€ 1200</strong></h4>
                        </div>
                        <div className='col-2 ml-auto'>
                            <i class={clsx(classes.iconColor,'fas fa-times')}></i>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Cards
