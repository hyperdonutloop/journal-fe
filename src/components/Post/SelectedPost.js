import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../auth/axiosWithAuth.js';
import Loader from 'react-loader-spinner';
import './Post.js'

//components
import Post from './Post.js';
import PostNav from '../PostNav/PostNav.js';

const SelectedPost = (props) => {
  const [post, setPost ] = useState(null);

  useEffect(() => {
    const id = props.match.params.id;

    axiosWithAuth()
      .get(`https://journal-be.herokuapp.com/api/entries/${id}`)
      .then(res => {
        setPost(res.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [props.match.params.id])

  return (
    <div>
      <PostNav post={post} />
      {!post ? <Loader type="ThreeDots" color="#A0A4D9" height={50} width={50} /> :
        <Post post={post} />
      }
    </div>
  )
};

export default SelectedPost;