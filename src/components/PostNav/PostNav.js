import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

const Pizza = styled.p`
  p {
    margin: 0
  }
`;

const PostNav = post => {
  return (
    <div className="nav">
      <div className="slogan">
        <Pizza>One Line A HOTDOG</Pizza>
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
          <i aria-hidden="true" className="edit medium icon" title="edit" />
        </h3>
      </NavLink>
    </div>
  )
};

export default PostNav;