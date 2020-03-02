import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .post-list-nav {
	height: 100px;
	background-color: papayawhip;
	width: 100%;
	display: flex;
	flex-direction: column;
	/* margin-bottom: 50px; */

	.slogan {
		/* height: 50px; */
		/* color: white; */
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		/* font-family: $font-content; */
		font-size: 2.5em;
	}

	.nav-bar {
		/* height: 50px; */
		border: 2px dotted purple;
		/* display: flex; */
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		.logout-button {
			/* margin-left: 10px; */
		}

		h3 {
			/* font-size: $font-size-edit; */
			/*  */
			/* padding: 0 20px; */
			border: 2px solid green;
			width: 50px;
			height: 50px;
			/* color: blue; */
		}
	}
}

`;

const PostListNav = ({ props }) => {
  const logout = event => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    props.history.push('/');
  }

  return (
    <Wrapper>
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
          <i aria-hidden="true" className="plus circle large icon" title="create post" />
        </h3>
      </NavLink>
      </div>
    </div>
    </Wrapper>
  )
};

export default PostListNav;