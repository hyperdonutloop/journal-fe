import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';

//components

function App() {
  return (
    <div className="App">
      <Route 
        exact path='/' 
        render={props => localStorage.getItem('token') 
        ? <Redirect to='/home' /> 
        : <Login {...props} />} 
      />

      <Route exact path='/signup' render={props => <SignUp {...props} />} />
    </div>
  );
}

export default App;
