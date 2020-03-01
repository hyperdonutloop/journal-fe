import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../auth/axiosWithAuth.js';

export default function JournalEntries (props) {
  const loginId = localStorage.getItem('user_id');

  // state that houses journal entries coming from BE so they can be mapped and rendered
  const [ entries, setEntries ] = useState([]);

  // tracks whether the current user has journal entries or not
  const [ isEmpty, setIsEmpty ] = useState(true)

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
    <div>
    
    </div>
  )
}

//finish this line 36 once other post components are done