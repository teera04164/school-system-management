import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import ControlSideBar from '../components/ControlSideBar';
import Content from '../components/Content';
export default function Dashboard() {
    return (
        <div>
            <Header />
            <Menu />
            <Content />
            <ControlSideBar />
            <Footer />
        </div>
    )
}
