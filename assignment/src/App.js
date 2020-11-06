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
import UserKit from './data/UserKit'
import Redirect from './components/Login/Redirect';
import GuardedRoute from './components/Login/GuradedRoute';

function App() {
  const [userData, setUserData] = useState(null)
  const [customerData, setCustomerData] = useState(null)
  const userKit = new UserKit()
 
  return (
    <div>

      <CustomerContext.Provider value={{ customerData, setCustomerData }}>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Navbar />

          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={LoginPage}></Route>
            <Route path='/signup' exact component={SignupPage}></Route>
            <GuardedRoute exact path='/customers/:id' component={CustomerDetailPage} auth={userKit.decodeToken()} />
            <GuardedRoute exact path='/customers' component={CustomersPage} auth={userKit.decodeToken()} />
            
          </Switch>
        </UserContext.Provider>
      </CustomerContext.Provider>



    </div>
  );
}

export default App;
