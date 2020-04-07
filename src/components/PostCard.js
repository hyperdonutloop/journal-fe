import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container } from 'semantic-ui-react';
import moment from 'moment';

import { Wrapper } from '../styles/PostCardStyles.js';

export default function PostCard ({ title, date, id }) {

	const formattedDate = moment(date).subtract(7, 'hours').format('LLLL');
  
  return (
		<Wrapper>
    <Container text>
      <div className="post-card">
        <Link to={`/post/${id}`}>
          <Card raised fluid className="card-container">
            <Card.Content>
              <Card.Header>
								<div className="post-title">{title}</div>
              </Card.Header>
              <Card.Meta>
							<div className="date">{formattedDate}</div>
              </Card.Meta>
            </Card.Content>
          </Card>
        </Link>
      </div>
    </Container>
		</Wrapper>
  )
};