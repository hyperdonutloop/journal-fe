import React, { useState } from 'react';
import { Form, Message, Segment, Grid, GridColumn, Image } from 'semantic-ui-react';
import axios from 'axios';

// styles
import { Bacon } from '../styles/SignUpStyles.js';
// assets
import logo from '../assets/logo.png'

export default function SignUp(props) {
  const [ userCreds, setUserCreds ] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });

  const [ incorrectCreds, setIncorrectCreds ] = useState({
    isIncorrect: false
  });

  const submitHandler = e => {
    e.preventDefault();

    axios.post('https://journal-be.herokuapp.com/api/auth/register', userCreds)
      .then(res => {
        console.log(res);
        setIncorrectCreds({ isIncorrect: false });
        props.history.push("/");
      })
      .catch(error => {
        console.log(error);
        setIncorrectCreds({ isIncorrect: true })
      })
  };

  const changeHandler = e => {
    setUserCreds({ ...userCreds, [e.target.name]: e.target.value })
  };

  return (
    <Bacon>
      <Grid className="grid" textAlign="center" verticalAlign="middle">
        <GridColumn className="column">
          
          <div className="container">
          <Image
            className="logo" 
            src={logo}
          />
            {incorrectCreds.isIncorrect && <Message error header="Please provide proper account details" />}
            <Form className="form" onSubmit={submitHandler}>
              <Segment>
                <Form.Input 
                  type="text"
                  placeholder="First Name"
                  name="firstname"
                  onChange={changeHandler}
                  value={userCreds.firstname}
                  required 
                />
                <Form.Input 
                  type="text"
                  placeholder="Last Name"
                  name="lastname"
                  onChange={changeHandler}
                  value={userCreds.lastname}
                  required 
                />
                <Form.Input 
                  type="text"
                  placeholder="Username"
                  name="username"
                  onChange={changeHandler}
                  value={userCreds.username}
                  required 
                />
                <Form.Input 
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={changeHandler}
                  value={userCreds.email}
                  required 
                />
                <Form.Input 
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={changeHandler}
                  value={userCreds.password}
                  required 
                />
                <Form.Button content="Sign Up" size="medium" />
              </Segment>
            </Form>
            
          </div>
        </GridColumn>
      </Grid>
    </Bacon>
  )


}