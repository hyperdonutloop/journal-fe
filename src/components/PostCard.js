import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container } from 'semantic-ui-react';
import styled from 'styled-components';
import Moment from 'react-moment';

import { Wrapper } from '../styles/PostCardStyles.js';

export default function PostCard ({ title, id }) {
	const date = new Date();
  
  return (
		<Wrapper>
    <Container text>
      <div className="post-card">
        <Link to={`/post/${id}`}>
          <Card raised fluid className="card-container">
            <Card.Content>
              <Card.Header>
								<div className="weekday">
									<Moment format="ddd">{date}</Moment>
								</div>
                <div className="date">
									<Moment format="MMMM Do, YYYY">{date}</Moment>
								</div>
								<div className="time">
									<Moment format="h:mm a">{date}</Moment>
								</div>
              </Card.Header>
              <Card.Meta>
                <div className="post-title">{title}</div>
              </Card.Meta>
            </Card.Content>
          </Card>
        </Link>
      </div>
    </Container>
		</Wrapper>
  )
};