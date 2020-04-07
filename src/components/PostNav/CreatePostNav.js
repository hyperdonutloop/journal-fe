import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../../auth/axiosWithAuth.js';
import styled from 'styled-components';
import { Button, ButtonContent, Icon } from 'semantic-ui-react';

// styles
import { Sprinkles } from '../../styles/CreatePostNavStyles.js';

const CreatePostNav = props => {
  // const [ day, setDay ] = useState('day');

  // React.useEffect(() => {
  //   const days = 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'
  //   setDay(days.split(' ')[new Date().getDay()])
  // }, [])
  
  
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
      <div className="slogan">
        <p>Have a good day</p>
      </div>

      <div className="nav-bar">
        <div className="back-button">
          <Link to="/home">
            <h3>
              <i className="left chevron icon" title="back" style={{ border: '2px solid purple'}} />
            </h3>
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
