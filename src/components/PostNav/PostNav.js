import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

import { Pizza }from '../../styles/PostNavStyles.js';

const PostNav = post => {
  return (
		<Pizza>
    <div className="nav">
      <div className="slogan">
        <p>One Line A HOTDOG</p>
      </div>

      <div className="nav-bar">
        <div className="back-button">
          <Link to="/home">
            <h3>
              <i className="chevron left icon" title="back" />
            </h3>
          </Link>
        </div>
      </div>

      <NavLink to={{
        pathname: `/editpost`,
        state: {post}
      }}>
        <h3>
          <i aria-hidden="true" className="edit outline icon" title="edit" />
        </h3>
      </NavLink>
    </div>
		</Pizza>
  )
};

export default PostNav;