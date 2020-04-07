import React from 'react';
import { Card, Container } from 'semantic-ui-react';
import { Wrapper } from '../../styles/PostStyles.js';
import moment from 'moment';

const Post = ({ post }) => {
  const { title, text, created_at } = post;
  const formattedDate = moment(created_at).subtract(7, 'hours').format('LLLL')
  return (
    <Wrapper>
    <Container text>
      <div className="post-container">
        <Card raised fluid className="card-container">
          <Card.Content>
            <Card.Header>
              <span className="post-title">{title}</span>
            </Card.Header>
            <Card.Meta>
              <span className="date">{formattedDate}</span>
            </Card.Meta>
            <Card.Description className="text">{text}</Card.Description>
          </Card.Content>
        </Card>
      </div>
    </Container>
    </Wrapper>
  )
};

export default Post;