import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, TableBody } from 'semantic-ui-react';
import styled from 'styled-components';
import Moment from 'react-moment';

import { Wrapper } from '../styles/PostCardStyles.js';
import moment from 'moment';

export default function PostCard ({ title, id }) {
	const date = new Date();
	
	let now = moment();
	console.log("\nLocalized")
	const time = moment().format('h:mm a')
	
	// keep working on getting time and date to work separately
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
									<div>{time}</div>
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