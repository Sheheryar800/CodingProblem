import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Cards from './Components/Cards';
import Products from './Components/Products';
import AdditionalCost from './Components/AdditionalCost';
import Cartons from './Components/Cartons';
import Sidebar from '../../Navbar/SideBar';
import Footer from '../../Navbar/Footer';



const useStyles = makeStyles((theme) => ({
    heading: {
        color: '#5a5c69',
        fontSize: '1.75rem',
    },
}))

function CreateInvoice() {
    const classes = useStyles();
    return (
        <div>
            <Sidebar />
            <div className='wrapping'>
                <h3 className={classes.heading}>Invoice</h3>
                <Cards />
                <Products />
                <Cartons />
                <AdditionalCost />
                <Footer />
            </div>
        </div>
    )
}

export default CreateInvoice
