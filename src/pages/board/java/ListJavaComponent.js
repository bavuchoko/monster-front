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
                    <div className="padding-trl-80p">
                        <h2>Content List</h2>
                        <Link to="/board/java/create-content">글쓰기</Link>
                        <table>
                            <thead>
                               <tr>
                                   <th>제목</th>
                                   <th>내용</th>
                                   <th>작성자</th>
                                   <th>등록일</th>
                                   <th>조회수</th>
                               </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListJavaComponent;