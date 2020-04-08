import styled from 'styled-components';

export const Bacon = styled.div`
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

    .logo {
      /* border: 2px dotted green; */
      max-width: 300px;
      display: inline;
    }
  }

`;