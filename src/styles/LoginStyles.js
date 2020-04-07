import styled from 'styled-components';

export const Pastry = styled.div`
  .container {
    /* border: 2px solid blue; */

    .nav {
      display: flex;
      justify-content: center;
      align-items: center;

      .logo {
        margin-top: 6rem;
        width: 300px;
      }
    }

    .form {
      /* margin-top: 5rem; */
      /* border: 2px solid pink; */
      
      /* min-width: 0; */
      display: flex;
      
      justify-content: center;
    }

    .message {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      /* border: 2px dotted green; */
    }

    .sign-up {
      padding-left: 0.5rem;
    }
  }

`;