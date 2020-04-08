import styled from 'styled-components';

export const Pastry = styled.div`
  .grid {
    text-align: center;
    vertical-align: middle;
    height: 85vh;
  }

  .column {
    max-width: 500px;

    @media screen and (max-width: 550px) {
      max-width: 400px;
    }
  }
  .container {
    /* border: 2px solid blue; */

    .logo {
        /* margin-top: 6rem; */
        display: inline;
        max-width: 300px;
        
      }

    .message {
      margin-top: 1rem;
      /* display: flex;
      justify-content: center; */
      /* border: 2px dotted green; */
    }

    .sign-up {
      padding-left: 0.5rem;
    }
  }

`;