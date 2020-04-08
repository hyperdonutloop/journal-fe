import React, { useState } from 'react';
import { Form, TextArea, Container } from 'semantic-ui-react';

//components
import CreatePostNav from '../PostNav/CreatePostNav.js';

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
    <div className="container">
        <CreatePostNav entry={entry} setEntry={setEntry} routerProps={props} />
        <Container text>
          <div>
            <Form>
              <Form.Field>
                {/* <label>Create Post</label> */}
                <input 
                  name="title" 
                  value={entry.title} 
                  placeholder="Title" 
                  onChange={changeHandler}
                  className="title"
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
    </div>
  );
}

export default CreateEntry;

