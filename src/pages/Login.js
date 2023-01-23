import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const adminDetails = {
    name: 'marziehFatemi',
    username: 'admin',
    password: '12345',
};

export default function LoginPage() {
    const [datas, setDatas] = useState({});
    const navigate = useNavigate();

    const handleOnChange = (event) => {
        setDatas(prevState => ({...prevState, [event.target.name]: event.target.value}));
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if(datas.username === adminDetails.username && datas.password === adminDetails.password) {
            navigate('/');
        }
    };

    return (
        <Box component="form" onSubmit={handleOnSubmit}>
            <TextField 
                type="text"
                id="usernameField" 
                label="Username" 
                variant="outlined" 
                name="username"
                value={datas.username || ""}
                onChange={handleOnChange}
                fullWidth
                sx={{mb: 1}}
            />
            <TextField 
                type="password"
                id="passwordField" 
                label="Password"
                variant="outlined" 
                name="password"
                value={datas.password || ""}
                onChange={handleOnChange}
                fullWidth
                sx={{mb: 1}}
            />
            <Button type="submit" variant='contained' sx={{display: 'block', width: '100%'}}> 
                Login
            </Button>
        </Box>
    );
};
