import React, { useState } from 'react';
import { axiosWithAuth } from '../../auth/axiosWithAuth.js';
import { Form, TextArea, Container, Button, Icon } from 'semantic-ui-react';

// import EditPostNav from '../PostNav/EditPostNav.js';
import { Donuts } from '../../styles/EditEntryStyles.js';

const EditEntry = (props) => {
  const { id, text, title, user_id } = props.location.state.post.post;

  const [ entry, setEntry ] = useState({
    id: id,
    title: title,
    text: text,
    user_id: user_id
  });

  // for deleting an entry
  const changeHandler = (event) => {
    setEntry({ ...entry, [event.target.name]: event.target.value });
  };

  const deleteEntry = (event) => {
    axiosWithAuth()
      .delete(`https://journal-be.herokuapp.com/api/entries/${id}`)
      .then((response) => {
        console.log(response);
        props.history.push('/home');
      })
      .catch((error) => {
        console.log(error);
      })
  };

  // for saving an entry
  const saveEditHandler = e => {
    e.preventDefault();

    axiosWithAuth().put(`https://journal-be.herokuapp.com/api/entries/${entry.id}`, {
      title: entry.title,
      text: entry.text,
      user_id: entry.user_id
    })
    .then(res => {
      console.log(res);
      props.history.push('/home')
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <Donuts>
      {/* <EditPostNav entry={entry} routerProps={props} /> */}
      <Container text>
        {/* <div className="form"> */}
          
          <Form>
          <h2>Edit Post</h2>
            <Form.Field>
              <input name="title" value={entry.title} onChange={changeHandler} />
            </Form.Field>
            <TextArea
              name="text" 
              style={{ minHeight: 480 }} 
              value={entry.text} 
              onChange={changeHandler} 
            />
          </Form>
        {/* </div> */}
        <Button className="button" animated onClick={saveEditHandler}>
          <Button.Content visible>
            Save
          </Button.Content>
          <Button.Content hidden>
            <Icon name='save' />
          </Button.Content>
        </Button>
        <Button className="button" animated onClick={deleteEntry}>
          <Button.Content visible>
            Delete
          </Button.Content>
          <Button.Content hidden>
            <Icon name='trash alternate' />
          </Button.Content>
        </Button>
        
      </Container>
    </Donuts>
  )
};

export default EditEntry;