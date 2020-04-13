import React, { Component } from 'react'
import ContentHeader from '../../components/ContentHeader';
import ContentBody from '../../components/ContentBody';
import {
    withRouter,
    Link
} from "react-router-dom";
export default class index extends Component {
    render() {
        return (
            <div>
                <ContentHeader name="นักเรียน" />
                <ContentBody>
                    <div class="col-md-12">
                        <div className="card card-primary">
                            <div className="card-header" style={{ padding: "0.1rem 1.25rem" }}>
                                <h3 className="card-title"></h3>
                            </div>
                            <div className="col-xs-12">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6" >
                                        {/* <div className="form-group" style={{ textAlign: 'start', marginTop: '1rem', marginLeft: '1rem' }}>
                                            <input type="text" className="form-control" placeholder="Enter ..." />
                                        </div> */}
                                        <div className="input-group " style={{ textAlign: 'start', marginTop: '1rem', marginLeft: '5rem' }}>
                                            <input type="text" className="form-control" />
                                            <span className="input-group-append">
                                                <button type="button" className="btn btn-info btn-default">  <i className="fa fa-search"></i> ค้นหา</button>
                                            </span>
                                        </div>

                                    </div>
                                    <div className="col-sm-12 col-md-6" >
                                        <div className="form-group" style={{ textAlign: 'end', marginTop: '1rem', marginRight: '1rem' }}>
                                        <button className="btn btn-primary" onClick={() => this.props.history.push("/student/add")}>
                                        <i className="fa fa-plus">&nbsp;&nbsp;</i>เพิ่มนักเรียน</button>
                                        </div>
                                    </div>
                                </div>

                                        {/* <div className="col-xs-6" style={{background:"red"}}>
                                </div>
                                <div className="col-xs-6" style={{ textAlign: 'end', marginTop: '1rem', marginRight: '1rem' }}>
                                    <button className="btn btn-primary" onClick={() => this.props.history.push("/sectionyear/create")}>
                                        <i className="fa fa-plus">&nbsp;&nbsp;</i>เพิ่มนักเรียน</button>
                                </div> */}
                                    </div>


                                    <div className="card-body">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th style={{ width: 1 }}>#</th>
                                                    <th>รหัส</th>
                                                    <th>ชื่อ-สกุล</th>
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

                </ContentBody>
                    </div>
                    )
                }
            }
