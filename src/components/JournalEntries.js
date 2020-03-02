import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../auth/axiosWithAuth.js';
import Loader  from 'react-loader-spinner';

// components 
import PostCard from './PostCard.js';
import PostListNav from './PostNav/PostListNav';

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
      .get(`https://journal-be.herokuapp.com/api/entries/users/${loginId}`)
      .then((response) => {
        setIsLoading(false);
        setIsEmpty(false);
        
        const unorderedEntries = [ ...response.data.data ].sort((a, b) => a.id < b.id ? 1 : -1);
        setEntries(unorderedEntries);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setIsEmpty(true);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="postlist-nav-container" >
        <PostListNav props={props} />
      </div>
      <div>
        {
          isLoading ? <Loader type="Oval" color="blue" height={80} width={80} /> :
          isEmpty ? <h1>You don't have any journal entries!</h1> :
          entries.map((entry) => {
            return (
              <PostCard 
                key={entry.id}
                id={entry.id}
                date={entry.created_at}
                title={entry.title}
                text={entry.text}
              />
            );
          })}
      </div>
    </React.Fragment>
  )
};