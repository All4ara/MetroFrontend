import React from 'react'
import { Container, AppBar, Typography, Grow, Grind, Grid } from '@material-ui/core';

import Logo from '../../../images/wide-silver-logo.png';
import Form from '../Form/Form.js'
import Posts from '../Posts/Posts.js'
import useStyles from '../../../styles';

const AgentHomePage = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h3" align="center">Agents of </Typography>
                <img className={classes.image} src={Logo} alt="MetroAgents" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Form />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Posts />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default AgentHomePage;
