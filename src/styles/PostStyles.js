import styled from 'styled-components';

export const Wrapper = styled.div`
  .post-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 5px dotted yellow; */
    margin-top: 1rem;

	.card-container {
		min-width: 100%;
		height: 100vh;
		height: auto;
    line-height: 3rem;
    /* border: 2px solid green; */

		.text {
      font-size: 1.6rem;
      text-align: justify;
      padding: 10px;
		}

		.post-title {
			font-size: 2em;
      line-height: 50px;
      /* border: 2px double blue; */
      padding: 5px;
      
		}

		div {
			margin: 0 0 20px 0;
		}
	}
}
`;