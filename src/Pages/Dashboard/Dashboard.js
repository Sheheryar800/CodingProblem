import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import clsx from 'clsx';
import Sidebar from '../../Navbar/SideBar';
import Footer from '../../Navbar/Footer';


const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: '0px 0px 10px gray',
        borderRadius: '7px',
        minHeight: '130px',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    heading: {
        color: '#5a5c69',
        fontSize: '1.75rem',
    },
    iconColor:{
        color: '#dddfeb',
        fontSize: '40px'
    },
    product:{
        color: '#4e73df',
        fontWeight: 'bold'
    },
    shipment:{
        color: '#1cc88a',
        fontWeight: 'bold'
    },
    unfinished:{
        color: '#f6c23e',
        fontWeight: 'bold'
    },
    products:{
        borderLeft: '.25rem solid #4e73df',
    },
    shipments:{
        borderLeft: '.25rem solid #1cc88a',
    },
    unfinisheds:{
        borderLeft: '.25rem solid #f6c23e',
    },
}))

function Dashboard() {
    const classes = useStyles();
    return (
        <div>
            <Sidebar />
            <div className='wrapping'>
                <div className='container-fluid'>
                    <h3 className={classes.heading}>Dashboard</h3>
                    <div className='row pr-3'>
                        <div className='col-md-4 mt-4'>
                            <Card className={clsx(classes.root, classes.products, 'pr-3')}>
                                <CardContent className='row' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <div className='col-9'>
                                        <p className={clsx(classes.product, 'p-o m-0')}>INVOICES PENDING PRODUCT MATCHING</p>
                                        <span>10</span>
                                    </div>
                                    <div className='col-2'>
                                        <i class={clsx(classes.iconColor,'fas fa-file-invoice')}></i>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className='col-md-4 mt-4'>
                            <Card className={clsx(classes.root, classes.shipments, 'pr-3')}>
                                <CardContent className='row' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <div className='col-9'>
                                        <p className={clsx(classes.shipment, 'p-o m-0')}>INVOICES PENDING SHIPMENT INFO</p>
                                        <span>13</span>
                                    </div>
                                    <div className='col-2'>
                                        <i class={clsx(classes.iconColor,'fas fa-truck-pickup')}></i>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className='col-md-4 mt-4'>
                            <Card className={clsx(classes.root, classes.unfinisheds, 'pr-3')}>
                                <CardContent className='row' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <div className='col-9'>
                                        <p className={clsx(classes.unfinished, 'p-o m-0')}>UNFINALIZED SHIPMENTS</p>
                                        <span>18</span>
                                    </div>
                                    <div className='col-2'>
                                        <i class={clsx(classes.iconColor,'fas fa-ship')}></i>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Dashboard;
