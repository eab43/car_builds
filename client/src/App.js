import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import memories from './images/memories.png';
import car from './images/car.jpg';


import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import useStyles from './styles';



const App = () => {

    //Posts and Forms need to be set a Id in order for the data to be updated and managed.
    const [currentId, setCurrentId] = useState(null);

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());

    }, [currentId, dispatch]);

    return (
        <Container maxidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit' align='left' /*This, elevation={0}, gets rid of box shadow*/>
                <Typography className={classes.typography} variant='h2' >Car Builds</Typography>
                {/* <img className={classes.image} src={car} alt='car' height='80' />  */}
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mobileGrid} container justifyContent='space-between' alignItems='stretch' spacing={4}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />

                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>

    )
}

export default App;