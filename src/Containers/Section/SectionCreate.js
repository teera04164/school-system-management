import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default function SectionCreate() {
    return (
        <div>
            <div class="col-md-12">
                <div className="card card-primary">
                    <div className="card-header" style={{ padding: "0.1rem 1.25rem" }}>
                        <h3 className="card-title"></h3>
                    </div>
                    <div className="col-xs-12">
                        <div className="col-xs-6">
                        </div>
                        <div className="col-xs-6" style={{ textAlign: 'end', marginTop: '1rem', marginRight: '1rem' }}>
                            <button className="btn btn-primary" data-toggle="modal" data-target="#modal-xl">
                                <i className="fa fa-plus">&nbsp;&nbsp;</i>เพิ่มปีการศึกษาใหม่
                            </button>
                        </div>
                    </div>

                    <div className="modal fade" id="modal-xl" style={{ display: 'none' }} aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">เพิ่มปีการศึกษาใหม่</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p>One fine body…</p>
                                </div>
                                <div className="modal-footer justify-content-between">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                            {/* /.modal-content */}
                        </div>
                        {/* /.modal-dialog */}
                    </div>




                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th style={{ width: 1 }}>#</th>
                                    <th>ปีการศึกษา</th>
                                    <th>เริ่มต้นการศึกษา</th>
                                    <th style={{ width: 160 }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1.</td>
                                    <td>Update software</td>
                                    <td>
                                        <div className="progress progress-xs">
                                            <div className="progress-bar progress-bar-danger" style={{ width: '55%' }} />
                                        </div>
                                    </td>
                                    <td>
                                        <Link to="/" class="btn btn-warning btn-flat btn-small" style={{ marginRight: '0.5rem' }}><i class="fa fa-edit" ></i></Link>
                                        <Link to="/" class="btn btn-danger btn-flat btn-small"><i class="fa fa-trash"></i></Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1.</td>
                                    <td>Update software</td>
                                    <td>
                                        <div className="progress progress-xs">
                                            <div className="progress-bar progress-bar-danger" style={{ width: '55%' }} />
                                        </div>
                                    </td>
                                    <td>
                                        <Link to="/" class="btn btn-warning btn-flat btn-small" style={{ marginRight: '0.5rem' }}><i class="fa fa-edit" ></i></Link>
                                        <Link to="/" class="btn btn-danger btn-flat btn-small"><i class="fa fa-trash"></i></Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1.</td>
                                    <td>Update software</td>
                                    <td>
                                        <div className="progress progress-xs">
                                            <div className="progress-bar progress-bar-danger" style={{ width: '55%' }} />
                                        </div>
                                    </td>
                                    <td>
                                        <Link to="/" class="btn btn-warning btn-flat btn-small" style={{ marginRight: '0.5rem' }}><i class="fa fa-edit" ></i></Link>
                                        <Link to="/" class="btn btn-danger btn-flat btn-small"><i class="fa fa-trash"></i></Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1.</td>
                                    <td>Update software</td>
                                    <td>
                                        <div className="progress progress-xs">
                                            <div className="progress-bar progress-bar-danger" style={{ width: '55%' }} />
                                        </div>
                                    </td>
                                    <td>
                                        <Link to="/" class="btn btn-warning btn-flat btn-small" style={{ marginRight: '0.5rem' }}><i class="fa fa-edit" ></i></Link>
                                        <Link to="/" class="btn btn-danger btn-flat btn-small"><i class="fa fa-trash"></i></Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1.</td>
                                    <td>Update software</td>
                                    <td>
                                        <div className="progress progress-xs">
                                            <div className="progress-bar progress-bar-danger" style={{ width: '55%' }} />
                                        </div>
                                    </td>
                                    <td>
                                        <Link to="/" class="btn btn-warning btn-flat btn-small" style={{ marginRight: '0.5rem' }}><i class="fa fa-edit" ></i></Link>
                                        <Link to="/" class="btn btn-danger btn-flat btn-small"><i class="fa fa-trash"></i></Link>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
        </div>
    )
}
