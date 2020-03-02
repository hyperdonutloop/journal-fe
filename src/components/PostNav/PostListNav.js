import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const PostListNav = ({ props }) => {
  const logout = event => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    props.history.push('/');
  }

  return (
    <div className="post-list-nav">
      <div className="slogan">
        <p>One Line A Day</p>
      </div>

      <div className="nav-bar">
        <Button className="logout-button" onClick={logout}>
          Logout
        </Button>

      <NavLink to="/createpost">
        <h3>
          <i aria-hidden="true" className="plus circle medium icon" title="create post" />
        </h3>
      </NavLink>
      </div>
    </div>
  )
};

export default PostListNav;