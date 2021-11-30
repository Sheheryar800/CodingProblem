import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Cards from './Components/Cards';
import ShipmentSettings from './Components/ShipmentSettings';
import CartonsTable from './Components/CartonsTable';
import AdditionalCost from './Components/AdditionalCost';
import AdditionalCostSpreading from './Components/AdditionalCostSpreading';
import Footer from '../../Navbar/Footer';
import Sidebar from '../../Navbar/SideBar';



const useStyles = makeStyles((theme) => ({
    heading: {
        color: '#5a5c69',
        fontSize: '1.75rem',
    },
}))

function CreateShipment() {
    const classes = useStyles();
    return (
        <div>
            <Sidebar />
            <div className='wrapping'>
                <h3 className={classes.heading}>Shipment</h3>
                <Cards />
                <ShipmentSettings />
                <CartonsTable />
                <AdditionalCost />
                <AdditionalCostSpreading />
                <Footer />
            </div>
        </div>
    )
}

export default CreateShipment
