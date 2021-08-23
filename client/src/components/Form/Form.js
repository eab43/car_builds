import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';



import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';


const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        owner: '',
        title: '',
        description: '',
        parts_list: '',
        tags: '',
        selectedFile: ''
    });

    const classes = useStyles();
    const dispatch = useDispatch();

    //This finds only one post with the same id as the currentId in order to update the post.
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

    useEffect(() => {
        if (post) setPostData(post);
    }, [post])


    const handleSubmit = (e) => {
        e.preventDefault();

        //If there is a post that is not null, it can be updated with the currentId, else a new post is created.
        if (currentId) {
            dispatch(updatePost(currentId, postData));

        }
        else {
            dispatch(createPost(postData));

        }
        cancel();
    }
    //Clears data to empty string
    const cancel = () => {
        setCurrentId(null);
        setPostData({
            owner: '',
            title: '',
            description: '',
            parts_list: '',
            tags: '',
            selectedFile: ''
        });
    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>{currentId ? 'Editing' : 'Post'} {currentId ? '' : 'a'} {currentId ? 'Build' : 'Build!'}</Typography>
                <TextField
                    name='title'
                    variant='outlined'
                    label='Title'
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField
                    name='owner'
                    variant='outlined'
                    label='owner'
                    fullWidth
                    value={postData.owner}
                    onChange={(e) => setPostData({ ...postData, owner: e.target.value })}
                />

                <TextField
                    name='description'
                    variant='outlined'
                    label='Description'
                    fullWidth
                    value={postData.description}
                    onChange={(e) => setPostData({ ...postData, description: e.target.value })}
                />
                <TextField
                    name='parts_list'
                    variant='outlined'
                    label='Parts List'
                    fullWidth
                    value={postData.parts_list}
                    onChange={(e) => setPostData({ ...postData, parts_list: e.target.value.split(',') })}
                />

                <TextField
                    name='tags'
                    variant='outlined'
                    label='Tags'
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
                />

                <div className={classes.fileInput}>
                    <FileBase
                        type='file'
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>
                    Submit
                </Button>

                <Button variant='contained' color='secondary' size='small' onClick={cancel} fullWidth>
                    Cancel
                </Button>

            </form>

        </Paper >

    )
}

export default Form;