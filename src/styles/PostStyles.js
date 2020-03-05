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
			/* text-align: center; */
			font-size: 1.5em;
		}

		img {
			margin-bottom: 20px;
		}

		.post-title {
			font-size: 1.5em;
			line-height: 50px;
		}

		div {
			margin: 0 0 20px 0;
		}
	}
}
`;