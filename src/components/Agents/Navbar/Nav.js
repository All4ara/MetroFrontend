import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import useStyles from './styles';


const Nav = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            {/* <Typography className={classes.heading} variant="h5" align="center">Agents of </Typography> */}
            <img className={classes.image} src={Logo} alt="MetroAgents" height="60" />
        </AppBar>
    )
}

export default Nav
