import React from 'react';
import SinglePost from './SinglePost/SinglePost.js';
import { useSelector } from 'react-redux';
import {Grid, CircularProgress } from '@material-ui/core';
import useStyles from './Styles.js'

const InstaPost= ({setCurrentId}) => {
  const iposts= useSelector((state)=>state.rposts);
  console.log(iposts);
  const styless=useStyles();
  return (
    !iposts.length?<CircularProgress/>:(
      <Grid className={styless.container} container alignItems='stretch' spacing={3}>
        {iposts.map((xp)=>(
          <Grid key={xp._id} item xs={12} sm={6}>
            <SinglePost spost={xp} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  )
}

export default InstaPost;