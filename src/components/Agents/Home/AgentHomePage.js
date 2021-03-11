import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../../actions/posts';
import Nav from '../Navbar/Nav'
import Form from '../Form/Form.js'
import Posts from '../Posts/Posts.js'
import useStyles from '../../../styles';

const AgentHomePage = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
        
    }, [currentId, dispatch]);

    return (
        <div className={classes.div}>
            <Container className={classes.container} maxWidth="lg">
                <Nav />
                <Grow in>
                    <Container>
                        <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Posts setCurrentId={setCurrentId}/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Form currentId={currentId} setCurrentId={setCurrentId}/>
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    )
}

export default AgentHomePage;
