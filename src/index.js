import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Header from './Header' 
import Banner from './Banner'
import Body from './Body';
import Footer from './Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header/>
    <Banner/>
    <Body/>
    <Footer/>
  </>
);
