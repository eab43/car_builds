import React from 'react';

import { Card, CardHeader, CardActions, CardContent, CardMedia, Button, Typography, IconButton, Collapse } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import clsx from 'clsx';

import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';


import moment from 'moment';
import useStyles from './styles';



const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };



    return (
        <Card className={classes.card} raised elevation={6}>
            <CardHeader
                title={post.title}
                subheader={moment(post.createdAt).fromNow()}
                action={
                    <IconButton aria-label='edit' size='small' onClick={() => setCurrentId(post._id)}>
                        <MoreVertIcon />
                    </IconButton>
                }
            >
            </CardHeader>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />

            <Typography className={classes.author} variant='h6'>&nbsp;By&nbsp;{post.author}</Typography>

            <div className={classes.details}>
                <Typography variant='body2' color='textSecondary'>{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <CardContent>
                <Typography className={classes.description} variant='body2' color='textSecondary' component='p' gutterBottom>{post.description}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary' onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon fontSize='small' />
                    &nbsp;Like &nbsp;
                    {post.likeCount}
                </Button>
                <Button className={clsx(classes.expand, { [classes.expandOpen]: expanded, })} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                    <ExpandMoreIcon />
                </Button>
                <Button size='small' color='primary' onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize='small' />
                    Delete
                </Button>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant='h5'>Parts List:</Typography>
                    <Typography >
                        {post.parts_list.map((parts_list) => <>{`${parts_list}`}<br /></>)}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card >
    )
}

export default Post;
