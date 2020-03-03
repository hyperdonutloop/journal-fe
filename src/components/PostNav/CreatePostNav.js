import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../../auth/axiosWithAuth.js';
import styled from 'styled-components';

const Wrapper = styled.div`
  .nav {
	height: 100px;
	background-color: #27292D;
	width: 100%;
	display: flex;
	flex-direction: column;
  margin-bottom: 50px;
  border: 2px solid blue;

	.slogan {
		width: 100%;
		height: 50px;
		/* color: blue; */
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		/* font-family: $font-content; */
		font-size: 2.5em;
	}

	.nav-bar {
		height: 50px;
		background-color: #27292D;
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
			
			// color: teal;
			/* color: $grey; */
			padding: 0 20px;
		}
	}
}

`;

const CreatePostNav = props => {
  const [ day, setDay ] = useState('day');

  React.useEffect(() => {
    const days = 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'
    setDay(days.split(' ')[new Date().getDay()])
  }, [])
  
  
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
        <p>Have a good {day}</p>
      </div>

      <div className="nav-bar">
        <div className="back-button">
          <Link to="/home">
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
