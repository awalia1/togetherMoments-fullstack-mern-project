import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { createPost } from '../../actions/posts';

const Form = () => {
    const [postData, setPostData] = useState({
       creator: '',
       title: '',
       message: '',
       tags: '',
       selectedFile: '' 
    })

    const { creator, title, message, tags, selectedFile } = postData;

    const classes = useStyles();

    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(createPost(postData));
    }

    const onChangeHandler = e => {
        setPostData({...postData, [e.target.name]: e.target.value});
    }

    const onDoneHandler = base64 => {
        setPostData({...postData, selectedFile: base64});
    }

    const clear = () => {
        setPostData({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: '' 
        })
    }
    
    return (
        <Paper className={classes.paper}>
            <form 
                autoComplete="off" 
                noValidate 
                className={`${classes.root} ${classes.form}`}
                onSubmit={(e) => handleSubmit(e)}
            >
                <Typography variant="h6">
                    Creating a moment together
                </Typography>
                <TextField 
                    name="creator" 
                    variant="outlined"
                    label="Creator"
                    fullWidth
                    value={creator}
                    onChange={(e) => onChangeHandler(e)}
                />
                <TextField 
                    name="title" 
                    variant="outlined"
                    label="title"
                    fullWidth
                    value={title}
                    onChange={(e) => onChangeHandler(e)}
                />
                <TextField 
                    name="message" 
                    variant="outlined"
                    label="message"
                    fullWidth
                    value={message}
                    onChange={(e) => onChangeHandler(e)}
                />
                <TextField 
                    name="tags" 
                    variant="outlined"
                    label="tags"
                    fullWidth
                    value={tags}
                    onChange={(e) => onChangeHandler(e)}
                />
                <div className={classes.fileInput}>
                    <FileBase 
                        type='file'
                        multiple={false}
                        onDone={(base64) => onDoneHandler(base64)}
                    />
                </div>
                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                >
                    Submit
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={clear}
                    fullWidth
                >
                    Clear
                </Button>
            </form>
        </Paper>
    )
}

export default Form;