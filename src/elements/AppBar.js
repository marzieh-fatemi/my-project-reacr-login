import React from 'react';
import {useSelector} from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Search from './Search';

export default function AppBarEl() {
  const posts = useSelector(state => state.posts);
  const numberOfPosts = posts.length;

  return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            My project
          </Typography>
          <Divider orientation="vertical" sx={{mx: 1}}/>
          <Typography>
            Number of posts: {numberOfPosts}
          </Typography>
          <Divider orientation="vertical" sx={{mx: 1}}/>
          <Search/>
          <Divider orientation="vertical" sx={{mx: 1}}/>
          <Button color="inherit"> Admin </Button>
        </Toolbar>
      </AppBar>
  );
}