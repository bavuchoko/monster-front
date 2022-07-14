import React, {Component} from 'react';
import ScrollSideMenu from "../../../components/SideMenu/ScrollSideMenu.js";
import { Link } from "react-router-dom";




class ListJavaComponent extends Component{
    constructor(props) {
        super(props);
        this.state ={
            contents:[],
            message:null
        }
    }




    render() {
        return (
            <div  className="width-70per mar-auto-0 disp-flex">
                <div className="width-200p">
                    <ScrollSideMenu />
                </div>
                <div className="width-100per-200p mar-auto-0">
                    <div className="padding-rl-80p-t-40p">
                        <h2 className="h2-head">JAVA</h2>
                        <div className="width-100per height-40p">
                            <div className="write_btn float-right">
                            <Link to="/board/java/create-content">글쓰기</Link>
                            </div>
                        </div>
                        <div className="table-div">

                            <div className="content-container ">
                                <div className="content-header disp-flex">
                                    <div className="content-img div-img border-circle width-40p margin-right-10p height-40p bac-color-gray-blue"> </div>
                                    <div className="content-title width-auto height-40p">제목제목제목제목제목제목제목제목제목제목제목제목제목</div>
                                    <div className="content-writer  margin-left-auto width-150p height-40p ">작성자작성자작성자</div>
                                </div>
                                <div className="content-body width-100per">내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이</div>
                                <div className="content-footer disp-flex">
                                    <div className="content-hit-count ">12</div>
                                    <div className="content-write-date margin-left-auto">2022-01-01</div>
                                </div>
                            </div>


                            <div className="content-container ">
                                <div className="content-header disp-flex">
                                    <div className="content-img div-img border-circle width-40p margin-right-10p height-40p bac-color-gray-blue"> </div>
                                    <div className="content-title width-auto height-40p">제목제목제목제목제목제목제목제목제목제목제목제목제목</div>
                                    <div className="content-writer  margin-left-auto width-150p height-40p">작성자</div>
                                </div>
                                <div className="content-body width-100per">내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이</div>
                                <div className="content-footer disp-flex">
                                    <div className="content-hit-count ">12</div>
                                    <div className="content-write-date margin-left-auto">2022-01-01</div>
                                </div>
                            </div>


                            <div className="content-container ">
                                <div className="content-header disp-flex">
                                    <div className="content-img div-img border-circle width-40p margin-right-10p height-40p bac-color-gray-blue"> </div>
                                    <div className="content-title width-auto height-40p">제목제목제목제목제목제목제목제목제목제목제목제목제목</div>
                                    <div className="content-writer  margin-left-auto width-150p height-40p">작성자</div>
                                </div>
                                <div className="content-body width-100per">내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이</div>
                                <div className="content-footer disp-flex">
                                    <div className="content-hit-count ">12</div>
                                    <div className="content-write-date margin-left-auto">2022-01-01</div>
                                </div>
                            </div>


                            <div className="content-container ">
                                <div className="content-header disp-flex">
                                    <div className="content-img div-img border-circle width-40p margin-right-10p height-40p bac-color-gray-blue"> </div>
                                    <div className="content-title width-auto height-40p">제목제목제목제목제목제목제목제목제목제목제목제목제목</div>
                                    <div className="content-writer  margin-left-auto width-150p height-40p">작성자</div>
                                </div>
                                <div className="content-body width-100per">내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이</div>
                                <div className="content-footer disp-flex">
                                    <div className="content-hit-count ">12</div>
                                    <div className="content-write-date margin-left-auto">2022-01-01</div>
                                </div>
                            </div>


                            <div className="content-container ">
                                <div className="content-header disp-flex">
                                    <div className="content-img div-img border-circle width-40p margin-right-10p height-40p bac-color-gray-blue"> </div>
                                    <div className="content-title width-auto height-40p">제목제목제목제목제목제목제목제목제목제목제목제목제목</div>
                                    <div className="content-writer  margin-left-auto width-150p height-40p">작성자</div>
                                </div>
                                <div className="content-body width-100per">내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이</div>
                                <div className="content-footer disp-flex">
                                    <div className="content-hit-count ">12</div>
                                    <div className="content-write-date margin-left-auto">2022-01-01</div>
                                </div>
                            </div>


                            <div className="content-container ">
                                <div className="content-header disp-flex">
                                    <div className="content-img div-img border-circle width-40p margin-right-10p height-40p bac-color-gray-blue"> </div>
                                    <div className="content-title width-auto height-40p">제목제목제목제목제목제목제목제목제목제목제목제목제목</div>
                                    <div className="content-writer  margin-left-auto width-150p height-40p">작성자</div>
                                </div>
                                <div className="content-body width-100per">내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이</div>
                                <div className="content-footer disp-flex">
                                    <div className="content-hit-count ">12</div>
                                    <div className="content-write-date margin-left-auto">2022-01-01</div>
                                </div>
                            </div>


                            <div className="content-container ">
                                <div className="content-header disp-flex">
                                    <div className="content-img div-img border-circle width-40p margin-right-10p height-40p bac-color-gray-blue"> </div>
                                    <div className="content-title width-auto height-40p">제목제목제목제목제목제목제목제목제목제목제목제목제목</div>
                                    <div className="content-writer  margin-left-auto width-150p height-40p">작성자</div>
                                </div>
                                <div className="content-body width-100per">내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이</div>
                                <div className="content-footer disp-flex">
                                    <div className="content-hit-count ">12</div>
                                    <div className="content-write-date margin-left-auto">2022-01-01</div>
                                </div>
                            </div>

                            <div className="content-container ">
                                <div className="content-header disp-flex">
                                    <div className="content-img div-img border-circle width-40p margin-right-10p height-40p bac-color-gray-blue"> </div>
                                    <div className="content-title width-auto height-40p">제목제목제목제목제목제목제목제목제목제목제목제목제목</div>
                                    <div className="content-writer  margin-left-auto width-150p height-40p">작성자</div>
                                </div>
                                <div className="content-body width-100per">내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이</div>
                                <div className="content-footer disp-flex">
                                    <div className="content-hit-count ">12</div>
                                    <div className="content-write-date margin-left-auto">2022-01-01</div>
                                </div>
                            </div>


                            <div className="content-container ">
                                <div className="content-header disp-flex">
                                    <div className="content-img div-img border-circle width-40p margin-right-10p height-40p bac-color-gray-blue"> </div>
                                    <div className="content-title width-auto height-40p">제목제목제목제목제목제목제목제목제목제목제목제목제목</div>
                                    <div className="content-writer  margin-left-auto width-150p height-40p">작성자</div>
                                </div>
                                <div className="content-body width-100per">내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이내용 이빠이</div>
                                <div className="content-footer disp-flex">
                                    <div className="content-hit-count ">12</div>
                                    <div className="content-write-date margin-left-auto">2022-01-01</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListJavaComponent;