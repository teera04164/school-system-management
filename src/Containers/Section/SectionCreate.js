import React from 'react'
import ContentHeader from '../../components/ContentHeader';
import ContentBody from '../../components/ContentBody';
import { Link } from "react-router-dom";

export default function SectionCreate() {
    return (
        <div>
            <ContentHeader name="ปีการศึกษา: เพิ่มปีการศึกษา" />
            <ContentBody>

                <div className="col-md-12">
                    {/* general form elements */}
                    <div className="card card-primary">
                        <div className="card-header" style={{ padding: "0.1rem 1.25rem" }}>
                            <h3 className="card-title"></h3>
                        </div>
                        {/* /.card-header */}
                        {/* form start */}
                        <form role="form">
                            <div className="card-body">
                            <div class="row">
                                        <div class="col-sm">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">ปีการศึกษา</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                                            </div>
                                        </div>
                                        <div class="col-sm">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">เริ่มภาคการศึกษา</label>
                                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                            </div>
                                        </div>
                                        <div class="col-sm">
                                        <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">สิ้นสุดภาคการศึกษา</label>
                                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">คำนำหน้า</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                                            </div>
                                        </div>
                                        <div class="col-sm">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">ชื่อ</label>
                                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                            </div>
                                        </div>
                                        <div class="col-sm">
                                        <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">นามสกุล</label>
                                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                            </div>
                                        </div>
                                    </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                            </div>
                            {/* /.card-body */}
                            <div className="card-footer">
                                <Link to="/sectionyear" type="submit" className="btn btn-warning" style={{marginLeft:"0.5rem"}}><i class="fa fa-mail-reply"></i> ย้อนกลับ</Link>
                                <button type="submit" className="btn btn-primary"  style={{marginLeft:"0.5rem"}}><i class="fas fa-save"></i> บันทึก</button>
                            </div>
                        </form>
                    </div>
                </div>
            </ContentBody>
        </div>
    )
}
