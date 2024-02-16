import React, {useEffect, useState} from 'react';
import { Container,AppBar,Typography,Grow,Grid } from '@material-ui/core';
import memories from './images/memories.png';
import Form from './Components/Form/form.js';
import InstaPosts from './Components/InstaPosts/InstaPosts.js';
import useStyles from './Styles.js';
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/apost.js';


const App = () => {
  const [currentId, setCurrentId]=useState(null);
  const styless= useStyles();
  const dispatch= useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
  },[currentId, dispatch]
  )
  
  return (
    <Container maxwidth="lg">
      <AppBar className={styless.appBar} position="static" color="inherit">
        <Typography className={styless.heading} variant="h2" align='center'>Memories</Typography>
        <img className={styless.image} src={memories} alt="memories" height='60'></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} className={styless.mainContainer}>
            <Grid item xs={12} sm={7}>
              <InstaPosts setCurrentId={setCurrentId} />
              </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid></Grid> 
        </Container>
      </Grow>
    </Container>
  )
}

export default App;
