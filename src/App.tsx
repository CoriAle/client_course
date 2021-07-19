import React, { Component }from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CountButton from './CountButton'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import './App.css';
import AuthState from './context/auth/authState';
import setAuthToken from './utils/setAuthToken';

if (localStorage.getItem('token')) {
  setAuthToken(localStorage.getItem('token'));
}

function App() {
  return (
  <AuthState>
   <Router>
     <div className='container'>
       <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/about' component={About} />
         <Route exact path='/login' component={Login} />
         <Route exact path='/register' component={Register} />
       </Switch>
     </div>
   </Router>
  </AuthState>
  );
}


export default App;
