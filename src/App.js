import './App.css';
import Blog from './Components/Blog/Blog';
import Destination from './Components/Destination/Destination';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/LogIn/LogIn';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Footer from './Components/Footer/Footer';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route path='/home'>
              <Home />
          </Route>
          <Route path='/login'>
              <Login />
          </Route>
          <Route path='/blog'>
              <Blog />
          </Route>
          <PrivateRoute path='/:destination'>
              <Destination />
          </PrivateRoute>
          <Route exact path='/'>
              <Home />
          </Route>
        </Switch>
             <Footer/>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
