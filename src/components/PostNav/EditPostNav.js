import React from 'react';
import { axiosWithAuth } from '../../auth/axiosWithAuth.js';
import { Link } from 'react-router-dom';

const EditPostNav = props => {
  const handleChange = e => {
    e.preventDefault();

    axiosWithAuth()
    .put(`https://journal-be.herokuapp.com/${props.entry.id}`, {
      title: props.entry.title,
      text: props.entry.text,
      user_id: props.entry.user_id
    })
    .then(res => {
      console.log(res);
      props.routerProps.history.push('/home')
    })
    .catch(error => {
      console.log(error);
    });
  }
    return (
      <div className="nav">
        <div className="slogan">
          <p>One Line A Day</p>
        </div>
        <div className="nav-bar">
          <div className="back-button">
            <Link to={`/post/${props.entry.id}`}>
              <h3>
                <i className="chevron-left-icon" title="back" />
              </h3>
            </Link>
          </div>
        </div>
        <h3 onClick={handleChange}>
          <i aria-hidden="true" className="save medium icon" title="save"></i>
        </h3>
      </div>
    )
};

export default EditPostNav;