import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container } from 'semantic-ui-react';
import styled from 'styled-components';

const Wrapper = styled.div`
	.post-card {
	.date {
		font-size: 1.8em;
		line-height: 1em;
		margin-bottom: 20px;
	}

	.post-title {
		font-size: 1.2em;
		/* font-family: $font-content; */
	}
}
`;

export default function PostCard ({ title, date, id }) {
  const changedate = date.split('-');
	const item3 = changedate[2];
	const item3split = item3.split('T');
	const month = changedate[1];
	const day = item3split[0];
	const year = changedate[0];
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