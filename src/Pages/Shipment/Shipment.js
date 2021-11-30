import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Tables from '../../Componants/Tables';
import Sidebar from '../../Navbar/SideBar';
import Footer from '../../Navbar/Footer';

const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: '0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important'
    },
    heading: {
        color: '#5a5c69',
        fontSize: '1.75rem',
        marginBottom: '30px'
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
}))

function Shipment() {
    const classes = useStyles();
    const rows = [
        {date: '1/2/2021', name: 'XZYA-1AZ', origin: 10.912, destination: 5.01231, 'total cbm': 28, finalized: true, 'view / edit':true},
        {date: '1/2/2021', name: 'XZYA-1AZ', origin: 10.912, destination: 5.01231, 'total cbm': 30, finalized: false, 'view / edit':false},
    ];
    const columns = ['Date', 'Name', 'Origin', 'Destination', 'Total CBM', 'Finalized', 'View / edit']
    const url = '/createshipment'
    return (
        <div>
            <Sidebar />
            <div className='wrapping'>
                <h3 className={classes.heading}>Shipment</h3>
                <div className={classes.root}>
                    <div className={classes.smallHeading}>
                        <strong>Shipment information</strong>
                    </div>
                    <Tables rows={rows} column={columns} url={url} />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Shipment
