import React from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../../auth/axiosWithAuth.js';

const CreatePostNav = props => {
  
  const submitHandler = event => {
    event.preventDefault();

    axiosWithAuth()
      .post('https://journal-be.herokuapp.com/api/entries', props.entry)
      .then(res => {
        props.routerProps.history.push('/home')
      })
      .catch(error => {
        console.log(error);
      })
  };

  return (
    <div className="nav">
      <div className="slogan">
        <p>One Line a Day</p>
      </div>

      <div className="nav-bar">
        <div className="back-button">
          <Link to="/home">
            <h3>
              <i className="left chevron icon" title="back" />
            </h3>
          </Link>
        </div>
      </div>
      <h3 onClick={submitHandler}>
        <i aria-hidden="true" className="save medium icon" title="save"></i>
      </h3>

    </div>
  )
};

export default CreatePostNav;

//may need ending / line 28