import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import { Pizza }from '../../styles/PostNavStyles.js';

const PostNav = post => {
  return (
		<Pizza>
      <div className="nav">
        <Link to="/home">
          <Button color="blue" className="back">Home</Button>
        </Link>
        <NavLink to={{ pathname: `/editpost`, state: {post}}}>
          <Button color="blue" className="edit">Edit</Button>
        </NavLink>
      </div>
		</Pizza>
  )
};

export default PostNav;