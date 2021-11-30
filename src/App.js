import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import CreateInvoice from './Pages/Invoice/CreateInvoice';
import Invoice from './Pages/Invoice/Invoice';
import LogIn from './Pages/LogIn/LogIn';
import CreateShipment from './Pages/Shipment/CreateShipment';
import Shipment from './Pages/Shipment/Shipment';



function App() {
  return (
    <Router>
      <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/invoice' component={Invoice} />
          <Route path='/createinvoice' component={CreateInvoice} />
          <Route path='/shipment' component={Shipment} />
          <Route path='/createshipment' component={CreateShipment} />
          <Route path='/login' component={LogIn} />
      </Switch>
  </Router>
  );
}

export default App;
