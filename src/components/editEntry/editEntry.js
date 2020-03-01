import React, { useState } from 'react';
import { axiosWithAuth } from '../../auth/axiosWithAuth.js';
import { Form, TextArea, Container, Button } from 'semantic-ui-react';

import EditPostNav from '../PostNav/EditPostNav.js';

const EditEntry = (props) => {
  const { id, text, title, user_id } = props.location.state.post.post;

  const [ entry, setEntry ] = useState({
    id: id,
    title: title,
    text: text,
    user_id: user_id
  });

  const changeHandler = (event) => {
    setEntry({ ...entry, [event.target.name]: event.target.value });
  };

  const deleteEntry = (event) => {
    axiosWithAuth()
      .delete(`https://journal-be.herokuapp.com/api/entries/${id}`)
      .then((response) => {
        props.history.push('/home');
      })
      .catch((error) => {
        console.log(error);
      })
  };

  return (
    <div>
      <EditPostNav entry={entry} routerProps={props} />
      <Container text>
        <div>
          <Form>
            <Form.Field>
              <label>Edit Post</label>
              <input name="title" value={entry.title} onChange={changeHandler} />
            </Form.Field>
            <TextArea name="text" value={entry.text} onChange={changeHandler} />
          </Form>
        </div>
        <Button basic size="medium" color="red" onClick={deleteEntry}>
          Destroy Entry
        </Button>
      </Container>
    </div>
  )
};

export default EditEntry;