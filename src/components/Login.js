import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Message, Form, Segment, Image, Grid, GridColumn } from 'semantic-ui-react';
import axios from 'axios';

import logo from '../assets/logo.png';

//styles
import { Pastry } from '../styles/LoginStyles.js';

export default function Login(props) {
  // credentials store the email/password inputted by user and is sent to backend for verification
  const [ credentials, setCredentials ] = useState({
    email: "",
    password: ""
  });
  // will cause error messages to appear if true
  const [ incorrectCreds, setIncorrectCreds ] = useState({
    isIncorrect: false
  });

  //sends credentials to backend for verification
  // if verification is successful, set the auth. token and user's id to localstorage

  const submitHandler = e => {
    e.preventDefault();

    axios.post('https://journal-be.herokuapp.com/api/auth/login', credentials)
      .then(response => {
        setIncorrectCreds({isIncorrect: false})

        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user_id', response.data.user.id);

        props.history.push("/home");
        console.log(response);
        
      })
      .catch(error => {
        console.log(error.message)
        setIncorrectCreds({ isIncorrect: true })
      })
  };

  const changeHandler = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value})
  }

  return (
    <Pastry>
      <Grid className="grid"textAlign="center" verticalAlign="middle" >
        <GridColumn className="column">
          <div className="container">
            <Image 
              className="logo"
              src={logo}
            />
            {incorrectCreds.isIncorrect && <Message error header="Email or password is incorrect" />}
            <Form className="form" onSubmit={submitHandler}>
              <Segment>
                <Form.Input
                  className="email"
                  type="email" 
                  placeholder="email" 
                  icon="user" 
                  iconPosition="left" 
                  name="email" 
                  value={credentials.email} 
                  onChange={changeHandler} 
                  required 
                />
                <Form.Input
                  type="password"
                  placeholder="password"
                  icon="user"
                  iconPosition="left"
                  name="password"
                  value={credentials.password}
                  onChange={changeHandler}
                  required
                />
                <Form.Button color="blue" content="Login" size="medium" />
              </Segment>
            </Form>
            <div className="message">
            <Message className="message">
              No account? {' '}<Link to="/signup" className="sign-up">Sign Up</Link>
            </Message>
            </div>
          </div>
        </GridColumn>
      </Grid>
    </Pastry>
  )

}