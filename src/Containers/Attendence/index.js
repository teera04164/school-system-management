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
                <ContentHeader name="การเช็คชื่อ" />
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
                                        {/* <div className="input-group " style={{ textAlign: 'start', marginTop: '1rem', marginLeft: '5rem' }}>
                                            <input type="text" className="form-control" />
                                            <span className="input-group-append">
                                                <button type="button" className="btn btn-info btn-default">  <i className="fa fa-search"></i> ค้นหา</button>
                                            </span>
                                        </div> */}

                                    </div>
                                    <div className="col-sm-12 col-md-6" >
                                        <div className="form-group" style={{ textAlign: 'end', marginTop: '1rem', marginRight: '1rem' }}>
                                        <button className="btn btn-primary" onClick={() => this.props.history.push("/attendence/add")}>
                                        <i className="fa fa-plus">&nbsp;&nbsp;</i>เพิ่มการเช็คชื่อ</button>
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


                                    <div className="card-body table-responsive">
                                    <table class="table">
  <caption>List of users</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">รายการ</th>
      <th scope="col">จำนวน</th>
      <th scope="col">นามสกุล</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">2</th>
      <td>เข้าเเถวหน้าเสาธง ม.1/1</td>
      <td>29</td>
      <td>@fat</td>
      <td><div class="btn btn-default btn-xs m-r-5" style={{margin: ".2rem .2rem"}} data-toggle="tooltip" data-original-title="Edit"><i class="far fa-calendar-check" style={{fontSize: '1.5rem'}}></i></div>
          <div class="btn btn-default btn-xs m-r-5" style={{margin: ".2rem .2rem"}} data-toggle="tooltip" data-original-title="Edit"><i class="fas fa-edit" style={{fontSize: '1.4rem'}}></i></div>
    </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td><button class="btn btn-default btn-xs m-r-5" style={{margin: ".2rem .2rem"}} data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-edit font-14"></i></button>
          <button class="btn btn-default btn-xs m-r-5" style={{margin: ".2rem .2rem"}} data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-eye font-14"></i></button>
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
