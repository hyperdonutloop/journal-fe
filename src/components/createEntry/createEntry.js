import React, { useState } from 'react';
import { Form, TextArea, Container } from 'semantic-ui-react';
import styled from 'styled-components';
//components
import CreatePostNav from '../PostNav/CreatePostNav.js';

const Wrapper = styled.div`
  .CreateEntry {
	text-align: center;
	width: 85vw;
	min-height: 80vh;
	max-width: 1024px;
	margin: 35px auto;
	background: rgb(226, 223, 223);
	padding: 15px;
	box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
	color: white;
}

.CreateEntry .Header {
	background: #404040;
	padding: 0.6rem;
	font-family: 'Open Sans';
}

.CreateEntry .formField {
	background-color: rgb(19, 18, 18);
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: black;
	font-family: 'Open Sans';
	background: white;
}

.EntryForm {
	background: rgb(199, 199, 199);
	font-family: 'Montserrat';
	padding: 2rem;
	width: 75%;
	margin-top: 3rem;
	margin-bottom: 2rem;
}

.EntryForm legend {
	color: black;
}

.EntryForm input {
	padding: 2rem;
	margin: 1rem;
	width: 70%;
	height: 1rem;
	background-color: rgb(236, 233, 233);
}
.CreateEntry-link {
	color: #61dafb;
}

.Link-text {
	border: 1px solid black;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-evenly;
	text-align: center;
	width: 20%;
	background: white;
	padding-top: 0.7rem;
	padding-bottom: 0.7rem;
	margin-top: 1rem;
	margin-bottom: 1rem;
	margin-right: auto;
	margin-left: auto;
}

.Route-text {
	border: 2px solid red;
	padding-left: 9rem;
	background: white;
	color: black;
}

`;



function CreateEntry (props) {
  const [ entry, setEntry ] = useState({
    title: '',
    text: '',
    user_id: localStorage.getItem('user_id')
  });

  const changeHandler  = (event) => {
    setEntry({ ...entry, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Wrapper>
      <CreatePostNav entry={entry} setEntry={setEntry} routerProps={props} />
      <Container text>
        <div>
          <Form>
            <Form.Field>
              <label>Create Post</label>
              <input 
                name="title" 
                value={entry.title} 
                placeholder="Title" 
                onChange={changeHandler} 
              />
            </Form.Field>
            <TextArea 
              name="text"
              value={entry.text}
              placeholder="Start writing..."
              onChange={changeHandler}
            />
          </Form>
        </div>
      </Container>
      </Wrapper>
    </div>
  );
}

export default CreateEntry;

