import React, {Fragment} from 'react';
import {Outlet} from 'react-router';
import Container from '@mui/material/Container';
import AppBar from './../elements/AppBar';

export default function Layout() {
    return (
        <Fragment>
            <AppBar/>
            <Container component="main" sx={{py: 3}}>
                <Outlet/>
            </Container>
        </Fragment> 
    );
};
