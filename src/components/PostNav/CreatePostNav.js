import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../../auth/axiosWithAuth.js';
import styled from 'styled-components';
import { Button, ButtonContent, Icon } from 'semantic-ui-react';

// styles
import { Sprinkles } from '../../styles/CreatePostNavStyles.js';

const CreatePostNav = props => {
  
  const submitHandler = event => {
    event.preventDefault();

    axiosWithAuth()
      .post('https://journal-be.herokuapp.com/api/entries', props.entry)
      .then(res => {
        console.log(res);
        props.routerProps.history.push('/home')
      })
      .catch(error => {
        console.log(error);
      })
  };

  return (
    <Sprinkles>
    <div className="nav">
      <div className="nav-bar">
        <div className="back-button">
          <Link to="/home">
            <Button color="blue" className="left">
              <Icon name="chevron left" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="save">
        <Button color="blue" className="save" animated onClick={submitHandler}>
          <ButtonContent visible>Save</ButtonContent>
          <ButtonContent hidden>
            <Icon name='save' />
          </ButtonContent>
        </Button>
      </div>
    </div>
    </Sprinkles>
  )
};

export default CreatePostNav;
