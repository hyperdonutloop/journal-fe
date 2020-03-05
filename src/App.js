import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import PrivateRoute from './auth/privateRoute.js';
import './App.css';

//components
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';
import JournalEntries from './components/JournalEntries.js';
import SelectedPost from './components/Post/SelectedPost.js';
import CreateEntry from './components/createEntry/createEntry.js';
import EditEntry from './components/editEntry/editEntry.js';

function App() {
  return (
    <div className="App">
      <div className="components">
      <Route 
        exact path="/" 
        render={props => localStorage.getItem('token') 
        ? <Redirect to="/home" /> 
        : <Login {...props} />} 
      />

      <Route exact path="/signup" render={props => <SignUp {...props} />} />
      <PrivateRoute exact path="/home" component={JournalEntries} />
      <Route exact path="/post/:id" render={props => <SelectedPost {...props} />} />
      <Route exact path="/createpost" component={CreateEntry} />
      <Route exact path="/editpost" render={props => <EditEntry {...props} />} />
      </div>
    </div>
  );
}

export default withRouter(App);
