import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container } from 'semantic-ui-react';
import { formatPostDate } from '../utils/helper.js'

import { Wrapper } from '../styles/PostCardStyles.js';

export default function PostCard ({ title, date, id }) {
	const dateparts = date.split('-');
	// console.log(dateparts, 'this is the dateparts log');

	const item3 = dateparts[2];
	// console.log(item3, 'this is item3 log');
	
	const item3split = item3.split('T');
	// console.log(item3split, 'item3 split log');
	
	const month = dateparts[1];
	// console.log(month, 'MONTH LOG DOG');
	
	const day = item3split[0];
	console.log(day, 'DAY LOG IS HERE');
	
	const year = dateparts[0];
	// console.log(year, 'YEAR LOG HERE');
	
	const dateword = () => {
		if (month === '01') {
			return 'January';
		}
		else if (month === '02') {
			return 'February';
		}
		else if (month === '03') {
			return 'March';
		}
		else if (month === '04') {
			return 'April';
		}
		else if (month === '05') {
			return 'May';
		}
		else if (month === '06') {
			return 'June';
		}
		else if (month === '07') {
			return 'July';
		}
		else if (month === '08') {
			return 'August';
		}
		else if (month === '09') {
			return 'September';
		}
		else if (month === '10') {
			return 'October';
		}
		else if (month === '11') {
			return 'November';
		}
		else if (month === '12') {
			return 'December';
		}
		else {
			return 'Not a Month';
		}
	};
	const datedisplay = `${dateword()} ${day}, ${year}`;

	
  
  return (
		<Wrapper>
    <Container text>
      <div className="post-card">
        <Link to={`/post/${id}`}>
          <Card raised fluid className="card-container">
            <Card.Content>
              <Card.Header>
                <div className="date">{datedisplay}</div>
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