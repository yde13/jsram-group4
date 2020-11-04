import './App.css';
import { Route, Switch } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import { useState } from 'react';
import { UserContext } from './contexts/UserContext';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [userData, setUserData] = useState(null)


  return (
    <div>
      <UserContext.Provider value={{userData, setUserData}}>
      <Navbar />

      
        <Switch>

          <Route path='/login' component={LoginPage}></Route>
          <Route path='/' component={Home}></Route>
        </Switch>
      </UserContext.Provider>

    </div>
  );
}

export default App;
