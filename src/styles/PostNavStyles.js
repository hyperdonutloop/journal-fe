import styled from 'styled-components';

 export const Pizza = styled.div`
  .nav {
	/* height: 100px; */
	/* background-color: $nav-grey; */
	/* width: 100%; */
	display: flex;
	flex-direction: column;
	margin-bottom: 250px;
	border: 2px solid red;

	.slogan {
		//  width: 100%;
		height: 50px;
		/* color: white; */
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		/* font-family: $font-content; */
		font-size: 1.5em;
	}

	.nav-bar {
		/* height: 50px; */
		/* background-color: white; */
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 2px solid pink;

		.back-button {
			/* color: $grey; */
			font-size: 1.5em;
			font-weight: bold;
			margin-left: 15px;
		}

		h3 {
			/* font-size: $font-size-edit; */
			// color: teal;
			/* color: $grey; */
			padding: 0 20px;
		}
	}
}
`;