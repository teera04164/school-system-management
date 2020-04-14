import React from 'react'

export default function Header() {
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="index3.html" className="nav-link">Home</a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="#" className="nav-link">Contact</a>
                </li>
            </ul>
            {/* SEARCH FORM */}
            <form className="form-inline ml-3">
                <div className="input-group input-group-sm">
                    <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                    <div className="input-group-append">
                        <button className="btn btn-navbar" type="submit">
                            <i className="fas fa-search" />
                        </button>
                    </div>
                </div>
            </form>
            {/* Right navbar links */}
            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                    <div className="nav-link" data-toggle="dropdown" href="#"  style={{ display: 'block' ,cursor:"pointer"}}>
                        {/* <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" style={{ width: '3rem', marginLeft: '.7rem', marginRight: '1.5rem' }} /> */}
                        <img src="dist/img/user2-160x160.jpg" class="img-circle " alt="User Image" style={{ width: '2.5rem', marginLeft: '-0.3rem', marginRight: '0rem' ,marginTop: '-0.6rem'}} />
                    </div>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <span className="dropdown-header">15 Notifications</span>
                        <div className="dropdown-divider" />
                        <a href="#"  className="dropdown-item dropdown-footer"> 
                            <i className="fa fa-user mr-2" /> Profile
        
                        </a>
                        <div className="dropdown-divider" />
                        <a href="#"  className="dropdown-item dropdown-footer"> 
                            <i className="fa fa-cog mr-2" /> Setting
        
                        </a>
                        <div className="dropdown-divider" />
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item dropdown-footer">  <i className="fa fa-power-off mr-2" /> Logout</a>
                    </div>
                </li>
                {/* <li className="nav-item dropdown">
                    <div className="image dropdown-toggle" href="#" id="navbarDropdown2"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style={{ display: 'block' }}>
                        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" style={{ width: '3rem', marginLeft: '.7rem', marginRight: '1.5rem' }} />
                    </div>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                        <a class="dropdown-item" href="#">FAQ</a>
                        <a class="dropdown-item" href="#">Support</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Contact</a>
                    </div>
                    <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button"><i className="fas fa-th-large" /></a>
                </li> */}
            </ul>
        </nav>


    )
}
