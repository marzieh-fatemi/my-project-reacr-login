import './App.css';
import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {fetchPosts} from './store/actions/index';
import Layout from './pages/Layout';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="login" element={<LoginPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
