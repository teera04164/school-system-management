import React from 'react'

export default function Footer() {
    return (
        <>
            <aside className="control-sidebar control-sidebar-dark">
            </aside>
            <footer className="main-footer text-sm">
                {/* To the right */}
                <div className="float-right d-none d-sm-inline">
                    Anything you want
                </div>
                {/* Default to the left */}
                <strong>Copyright © 2014-2019 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
            </footer>
        </>
    )
}
