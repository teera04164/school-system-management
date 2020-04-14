import React, { Component } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const $ = window.$
export default class Menu extends Component {

    constructor(props) {
        super(props)
        this.state = { matches: window.matchMedia("(min-width: 890px)").matches };
    }

    componentDidMount() {
        const handler = e => this.setState({ matches: e.matches });
        window.matchMedia("(min-width: 890px)").addListener(handler);
    }

    removeClass = () => {
        console.log("sss", this.state.matches);
        if (!this.state.matches) {
            $('.sidebar-mini').removeClass('sidebar-open').addClass('sidebar-closed sidebar-collapse');
        }
        // console.log("onClick", isMobile);
        // let isMobile = aa()
        // if (isMobile) {
        //     $('.sidebar-mini').removeClass('sidebar-open').addClass('sidebar-closed sidebar-collapse');
        // }
        // $(".sidebar-mini").attr('sidebar-open', 'sidebar-closed');
        //sidebar-closed sidebar-collapse
        // this.divRef.current.classList.className = "sidebar-mini sidebar-closed sidebar-collapse"
    }

    render() {
        return (
            <aside className="main-sidebar sidebar-dark-primary" ref={this.divRef}>
                {/* Brand Logo */}
                <Link to="/" className="brand-link">
                    <img src="dist/img/lg09402001.jpg" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light">Smart PPM</span>
                </Link>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a className="d-block" href="/">Alexander Pierce</a>
                            <a href="#"><i class="fa fa-circle user-online" style={{ fontSize: ".6rem", color: "limegreen" }}></i><span class="txtOnline" style={{ fontSize: 'smaller' }}> admin</span></a>
                        </div>
                    </div>

                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                            <li className="nav-item" onClick={this.removeClass}>
                                <Link to="/sectionyear" className="nav-link" >
                                    <i className="nav-icon fas fa-th" />
                                    <p>
                                        ปีการศึกษา
                                <span className="right badge badge-danger">New</span>
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item" onClick={this.removeClass}>
                                <Link to="/student" className="nav-link">
                                    <i className="nav-icon fas fa-child " />
                                    <p>
                                        นักเรียน
                                <span className="right badge badge-danger">New</span>
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item" onClick={this.removeClass}>
                                <Link to="/group" className="nav-link">
                                    <i className="nav-icon fas fa-child " />
                                    <p>
                                        กลุ่ม
                                <span className="right badge badge-danger">New</span>
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item" onClick={this.removeClass}>
                                <Link to="/attendence" className="nav-link">
                                    <i className="nav-icon fas fa-child " />
                                    <p>
                                        เช็คชื่อ
                                <span className="right badge badge-danger">New</span>
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item" onClick={this.removeClass}>
                                <Link to="/attendence" className="nav-link">
                                    <i className="nav-icon fas fa-child " />
                                    <p>
                                        ความประพฤติ
                                <span className="right badge badge-danger">New</span>
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item has-treeview menu-open">
                                <a href="#" className="nav-link ">
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p>
                                        จัดการปีการศึกษา
                                     <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="/Dashboard" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>ปีการศึกษา</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/Admin" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Inactive Page</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/User" href="#" className="nav-link">
                                    <i className="nav-icon fas fa-th" />
                                    <p>
                                        Simple Link
                                 <span className="right badge badge-danger">New</span>
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
        )
    }
}
