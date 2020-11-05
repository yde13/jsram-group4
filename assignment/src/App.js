import './App.css';
import { Route, Switch } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import { useState } from 'react';
import { UserContext } from './contexts/UserContext';
import { CustomerContext } from './contexts/CustomersContext'
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import CustomersPage from './pages/CustomersPage';
import CustomerDetailPage from './pages/CustomerDetailPage';
import SignupPage from './pages/SignupPage';

function App() {
  const [userData, setUserData] = useState(null)
  const [customerData, setCustomerData] = useState(null)


  return (
    <div>

      <CustomerContext.Provider value={{ customerData, setCustomerData }}>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Navbar />

          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={LoginPage}></Route>
            <Route path='/signup' exact component={SignupPage}></Route>
            <Route exact path='/customers/:id' component={CustomerDetailPage}></Route>
            <Route exact path='/customers' component={CustomersPage}></Route>
          </Switch>
        </UserContext.Provider>
      </CustomerContext.Provider>



    </div>
  );
}

export default App;
