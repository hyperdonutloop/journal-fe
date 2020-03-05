import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { Pizza }from '../../styles/PostNavStyles.js';

const PostNav = post => {
  return (
		<Pizza>
      <div className="nav">
        <Link to="/home">
          {/* <i className="chevron left large icon" title="back" /> */}
          <button className="back">Back</button>
        </Link>
        <NavLink to={{ pathname: `/editpost`, state: {post}}}>
            {/* <i aria-hidden="true" className="edit outline large icon" title="edit" /> */}
            <button className="edit">Edit</button>
        </NavLink>
      </div>
		</Pizza>
  )
};

export default PostNav;