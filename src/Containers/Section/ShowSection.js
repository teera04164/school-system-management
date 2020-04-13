import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function ShowSection() {
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
                            <Link to="/sectionYear/create" className="btn btn-primary">
                                <i className="fa fa-plus">&nbsp;&nbsp;</i>Add New Student</Link>
                        </div>
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
