import './App.css';
import { Route, Switch } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import { useState } from 'react';
import { UserContext } from './contexts/UserContext';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import CustomersPage from './pages/CustomersPage';
import SignupPage from './pages/SignupPage';

function App() {
  const [userData, setUserData] = useState(null)

  return (
    <div>
      <UserContext.Provider value={{userData, setUserData}}>
      <Navbar />
        <Switch>
          <Route path='/signup' exact component={SignupPage}></Route>
          <Route path='/login' exact component={LoginPage}></Route>
          <Route path='/customers' exact component={CustomersPage}></Route>
          <Route path='/' exact component={Home}></Route>
        </Switch>
      </UserContext.Provider>

    </div>
  );
}

export default App;
