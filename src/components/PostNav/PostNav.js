import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { Pizza }from '../../styles/PostNavStyles.js';

const PostNav = post => {
  return (
		<Pizza>
      <div className="nav">
        <Link to="/home">
          <i className="chevron left large icon" title="back" />
        </Link>
        <NavLink to={{ pathname: `/editpost`, state: {post}}}>
            <i aria-hidden="true" className="edit outline large icon" title="edit" />
        </NavLink>
      </div>
		</Pizza>
  )
};

export default PostNav;