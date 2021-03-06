import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createPost, updatePost } from '../../../actions/posts';

const Form = ({ currentId = 0, setCurrentId }) => {
    const [postData, setPostData] = useState({ address: '', propertyType: '', selectedFile: '', price: '', stats: '' });
    const post = useSelector((state) => (currentId ? state.posts.find((p) => p._id === currentId) : null));
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        if(post) setPostData(post);
        
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(currentId)
        if(!currentId) {
            dispatch(createPost({ ...postData, name: user?.result?.name }));
            clear();
        } else {
            dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
            clear();
        }
        
    }
    const clear = () => {
        setCurrentId(0);
        setPostData({ address: '', propertyType: '', selectedFile: '', price: '', stats: ''  })
    }

    if(!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="left">
                    Sign Up if you're a new agent of MetropolitanBrokersNY.
                    <Typography variant="h5" align="right">
                        or
                    </Typography>
                    Sign In if you're a agent of MetropolitanBrokersNY. 
                </Typography>
            </Paper>
        )
    }

    return (
        <Paper className={classes.paper}>
            <form className={`${classes.root} ${classes.form}`} autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Edit Property Sold' : 'Post A Sold Property'}</Typography>
                <TextField name="address" variant="outlined" label="Address - ex: 1234 (Street name), (City), (State) (12345)" fullWidth value={postData.address} onChange={(e) => setPostData({ ...postData, address: e.target.value })}/>
                <TextField name="propertyType" variant="outlined" label="Property Type - ex: 1 bed, 2 bath, 3,456 sqft" fullWidth value={postData.propertyType} onChange={(e) => setPostData({ ...postData, propertyType: e.target.value })}/>
                <TextField name="price" variant="outlined" label="Price - ex: 123,456" fullWidth value={postData.price} onChange={(e) => setPostData({ ...postData, price: e.target.value })}/>
                <TextField name="stats" variant="outlined" label="Status - ex: Sold or Active" fullWidth value={postData.stats} onChange={(e) => setPostData({ ...postData, stats: e.target.value })}/>
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form
