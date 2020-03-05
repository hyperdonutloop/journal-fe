import styled from 'styled-components';

 export const Cookies = styled.div`
  .container {
    border: 2px dashed palevioletred;
  }
  .post-list-nav {
    border: 2px dotted pink;
  }

  .nav-bar {
    border: 2px solid green;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
  }
  .postlist-nav-container {
    display: flex;
    flex-direction: column;
    border: 2px dashed purple;
    margin-left: auto;
    margin-right: auto;
    /* margin-top: 10rem; */
    max-width: 1024px;
    padding-top: 20rem;
    padding-bottom: 3rem;
    padding: 1rem;
    border: 2px dashed orange;

    
    .post-card {
      border: 3px dashed blue;
    }
  }

`;