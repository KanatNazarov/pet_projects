import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/screens/Home/Home';
import Layout from './components/layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Contacts from './components/Header/Contacts';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  
  {/* <Layout>
  <Home/>

  </Layout> */}

    <Header/>
  <Routes>
    <Route path='/' element={<Layout/>} />
    <Route path='/contacts' element={<Contacts/>}/>
  </Routes>
  </BrowserRouter>
 
  </React.StrictMode>
);


