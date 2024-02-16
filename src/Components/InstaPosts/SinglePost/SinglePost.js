import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useStyles from './styles.js';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {deletePost, likePost} from '../../../actions/apost.js';

const SinglePost = ({spost, setCurrentId}) => {
  const styless=useStyles();
  const dispatch=useDispatch();
  return (
    <Card className={styless.card}>
      <CardMedia className={styless.media} image={spost.selectedFile} title={spost.title}  />
      <div className={styless.overlay}>
        <Typography variant="h6">{spost.creator}</Typography>
        <Typography variant="body2">{moment(spost.createdAt).fromNow()}</Typography>
      </div>
      <div className={styless.overlay2}>
        <Button style={{color:'white'}} size="small" onClick={()=>{setCurrentId(spost._id)}}>
          <MoreHorizIcon fontSize='default'/>
        </Button>
      </div>
      <div className={styless.details}>
      <Typography variant="body2" color='textSecondary'>{spost.tags.map((tag)=>`#${tag}`)}</Typography>
      </div>
      <Typography className={styless.title} variant="h5" gutterBottom>{spost.title}</Typography>
      <CardContent>
      <Typography variant="body2" color="textSecondary" component='P'>{spost.message}</Typography>
      </CardContent>
      <CardActions className={styless.cardActions}>
        <Button size="small" color="primary" onClick={()=>{dispatch(likePost(spost._id))}}>
          <ThumbUpAltIcon fontSize='small'/>
          &nbsp; Like &nbsp;
          {spost.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={()=>{dispatch(deletePost(spost._id))}}>
          <DeleteIcon fontSize='small'/>
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default SinglePost