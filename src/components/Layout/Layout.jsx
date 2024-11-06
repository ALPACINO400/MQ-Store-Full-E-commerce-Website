import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const Layout = () =>{
  return (
    <div>
      <Header />
      <Main />
      <Footer/>
    </div>
  );
  
}

export default Layout
