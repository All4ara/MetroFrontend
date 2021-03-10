import React, { useState, useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../../actions/posts';
import Logo from '../../../images/wide-silver-logo.png';
import Form from '../Form/Form.js'
import Posts from '../Posts/Posts.js'
import useStyles from '../../../styles';

const AgentHomePage = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
        
    }, [dispatch]);

    return (
        <div className={classes.div}>
            <Container className={classes.container} maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    {/* <Typography className={classes.heading} variant="h5" align="center">Agents of </Typography> */}
                    <img className={classes.image} src={Logo} alt="MetroAgents" height="60" />
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Form currentId={currentId} setCurrentId={setCurrentId}/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Posts setCurrentId={setCurrentId}/>
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    )
}

export default AgentHomePage;
