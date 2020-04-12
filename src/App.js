import React from 'react'
import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content';
import Footer from './components/Footer';
import ControlSideBar from './components/ControlSideBar';

export default function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Menu/>
      <Content/>
      <Footer/>
      <ControlSideBar/>
    </div>
  )
}
