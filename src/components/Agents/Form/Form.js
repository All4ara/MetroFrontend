import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { createPost } from '../../../actions/posts';

const Form = () => {
    const [postData, setPostData] = useState({ agent: '', address: '', propertyType: '', selectedFile: '', });
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
    }
    const clear = () => {
        setPostData({ agent: '', address: '', propertyType: '', selectedFile: ''  })
    }

    return (
        <Paper className={classes.paper}>
            <form className={`${classes.root} ${classes.form}`} autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">Property Sold</Typography>
                <TextField name="agent" variant="outlined" label="Agent" fullWidth value={postData.agent} onChange={(e) => setPostData({ ...postData, agent: e.target.value })}/>
                <TextField name="address" variant="outlined" label="Address" fullWidth value={postData.address} onChange={(e) => setPostData({ ...postData, address: e.target.value })}/>
                <TextField name="propertyType" variant="outlined" label="Property Type" fullWidth value={postData.propertyType} onChange={(e) => setPostData({ ...postData, propertyType: e.target.value })}/>
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
