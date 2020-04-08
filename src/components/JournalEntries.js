import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../auth/axiosWithAuth.js';
import Loader from 'react-loader-spinner';
import { Cookies } from '../styles/JournalEntriesStyles.js';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

// components 
import PostCard from './PostCard.js';
// import PostListNav from './PostNav/PostListNav';

export default function JournalEntries (props) {
  const loginId = localStorage.getItem('user_id');

  // state that houses journal entries coming from BE so they can be mapped and rendered
  const [ entries, setEntries ] = useState([]);

  // tracks whether the current user has journal entries or not
  const [ isEmpty, setIsEmpty ] = useState(true);

  // tracks status of fetching journal entries
  const [ isLoading, setIsLoading ] = useState(true);

  // populates page with initial journal entries from logged in user
  useEffect(() => {
    axiosWithAuth()
      .get(`https://journal-be.herokuapp.com/api/entries/user/${loginId}`)
      .then((response) => {
        console.log(response);
        console.log(response.data.data, 'THIS IS THE DATA');
        
        
        setIsLoading(false);
        setIsEmpty(false);
        
        const unorderedEntries = [ 
          ...response.data.data 
        ].sort(
          (a, b) => 
            a.id < b.id ? 1 : -1);
        setEntries(unorderedEntries);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setIsEmpty(true);
      });
  }, []);

  const logout = event => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    props.history.push('/');
  }

  return (
    
      <Cookies>
        <div className="container">
          <header className="header">
            <Button color="blue" className="logout-button" onClick={logout}>
              Logout
            </Button>
            
            <NavLink to="/createpost">
              <Button color="blue" className="add">Add Post</Button>
            </NavLink>
          </header>
          <div className="card container">
            <div className="post-card">
              {
                isLoading ? <Loader type="ThreeDots" color="#1778C2" height={80} width={80} /> :
                isEmpty ? <p>You have no journal entries, start writing!</p> :
                entries.map(entry => {
                  return (
                    <PostCard 
                      key={entry.id}
                      id={entry.id}
                      date={entry.created_at}
                      title={entry.title}
                      text={entry.text}
                    />
                  )
                })
              }
            </div>
          </div>
      </div>
      <footer style={{ height: '20px '}} />
      </Cookies>
  )
};