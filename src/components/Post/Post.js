import React from 'react';
import { Card, Container } from 'semantic-ui-react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .post-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

	.card-container {
		min-width: 99%;
		height: 99vh;
		height: auto;
		font-family: $font-content;
		line-height: 20px;

		.text {
			text-align: center;
			font-size: 1em;
		}

		img {
			margin-bottom: 20px;
		}

		.post-title {
			font-family: $font-header;
			font-size: 1.5em;
			line-height: 50px;
		}

		div {
			margin: 0 0 20px 0;
		}
	}
}
`;


const Post = ({ post }) => {
  const { title, text, created_at } = post;

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
    <Wrapper>
    <Container text>
      <div className="post-container">
        <Card raised fluid className="card-container">
          <Card.Content>
            <Card.Header>
              <span className="post-title">{title}</span>
            </Card.Header>
            <Card.Meta>
              <span className="date">{datedDisplay}</span>
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