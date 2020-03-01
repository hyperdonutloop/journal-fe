import React from 'react';
import { Card, Container } from 'semantic-ui-react';

const Post = ({ post }) => {
  const { id, title, text, created_at } = post;

  //formats the date
  const changeDate = created_at.split('-');
  const item3 = changeDate[2];
  const item3split = item3.split('T');
  const month = changeDate[1];
  const day = item3split[0];
  const year = changeDate[0];
  const dateWord = () => {
    if (month === '01') {
      return 'January';
    } 
    else if (month === '02') {
      return 'February'
    }
    else if (month === '03') {
      return 'March'
    }
    else if (month === '04') {
      return 'April'
    }
    else if (month === '05') {
      return 'May'
    }
    else if (month === '06') {
      return 'June'
    }
    else if (month === '07') {
      return 'July'
    }
    else if (month === '08') {
      return 'August'
    }
    else if (month === '09') {
      return 'September'
    }
    else if (month === '10') {
      return 'October'
    }
    else if (month === '11') {
      return 'November'
    }
    else if (month === '12') {
      return 'December'
    }
    else {
      return 'Not a Month'
    }
  };
  const datedDisplay = `${dateWord()} ${day}, ${year}`;

  return (
    <Container text>
      <div>
        <Card raised fluid className="card-container">
          <Card.Content>
            <Card.Header>
              <span className="post-title"></span>
            </Card.Header>
            <Card.Meta>
              <span className="date">{datedDisplay}</span>
            </Card.Meta>
            <Card.Description className="text">{text}</Card.Description>
          </Card.Content>
        </Card>
      </div>
    </Container>
  )
}