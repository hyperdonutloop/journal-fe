import React from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../../auth/axiosWithAuth.js';
import styled from 'styled-components';

const Wrapper = styled.div`
  .nav {
	height: 100px;
	background-color: pink;
	width: 100%;
	display: flex;
	flex-direction: column;
  margin-bottom: 50px;
  border: 2px solid blue;

	.slogan {
		//  width: 100%;
		height: 50px;
		color: white;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		/* font-family: $font-content; */
		font-size: 1.5em;
	}

	.nav-bar {
		height: 50px;
		background-color: white;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.back-button {
			/* color: $grey; */
			font-size: 1.5em;
			font-weight: bold;
			margin-left: 15px;
		}

		h3 {
			font-size: $font-size-edit;
			// color: teal;
			/* color: $grey; */
			padding: 0 20px;
		}
	}
}

`;

const CreatePostNav = props => {
  
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
    <Wrapper>
    <div className="nav">
      <div className="slogan">
        <p>One Line a Day</p>
      </div>

      <div className="nav-bar">
        <div className="back-button">
          <Link to="/home/">
            <h3>
              <i className="left chevron icon" title="back" style={{ border: '2px solid purple'}} />
            </h3>
          </Link>
        </div>
      </div>
      <h3 onClick={submitHandler}>
        <i aria-hidden="true" className="save large icon" title="save"></i>
      </h3>

    </div>
    </Wrapper>
  )
};

export default CreatePostNav;
