
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import {Typography} from "@mui/material";
import React from 'react'
import Fetch from "../httpRequest/Fetch";

function HomePage(props) {
  return (
    <div>
    <AppBar position="static">
        <Toolbar>
  
        <p>number of searching:</p>
        <Typography variant="h6" 
            component="div" sx={{ flexGrow: 1 }}>
            My Project
          </Typography>
        

        <p>name:{props.name} ,, email:{props.email}</p>
          
        </Toolbar>
      </AppBar>
      <Fetch/>


    </div>
  )
}

export default HomePage