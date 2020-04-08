import styled from 'styled-components';

export const Pastry = styled.div`
  .grid {
    text-align: center;
    vertical-align: middle;
    height: 100vh;
  }

  .column {
    max-width: 500px;
  }
  .container {
    /* border: 2px solid blue; */

    .logo {
        /* margin-top: 6rem; */
        display: inline;
        max-width: 300px;
        
      }

    .form {
      /* margin-top: 5rem; */
      /* border: 2px solid pink; */
      
      /* min-width: 0; */
      /* display: flex;
      
      justify-content: center; */
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