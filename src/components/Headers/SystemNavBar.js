import React from "react";

import smalllogo from '../../assets/image/smalllogo.png';
import github from '../../assets/image/github.png';
import magnifier2 from '../../assets/image/magnifier2.png';
import ScrollDropDown from "../Dropdowns/ScrollDropDown.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTv} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export default function Navbar(props) {

    return (

        <>

            <nav className="fixed fullWidth underlineShadow bac-color-white">
                <div className="height-40p underline ">
                   <div className="width-70per mar-auto height-100per " >
                       <div className="width-150p height-100per  dsip-inlineblock"></div>
                       <div className="float-right">
                           <ul className="noulstyle disp-flex">
                               <li className="noulstyle nav-div-ul-li top-bar-li">
                                   <Link className="nav-ul-li-p hover-btn " to="/member/login">
                                       로그인
                                   </Link>
                               </li>
                               <li className="noulstyle nav-div-ul-li top-bar-li">
                                   <Link className="nav-ul-li-p hover-btn " to="/member/login">
                                       about me
                                   </Link>
                               </li>
                               <li className="noulstyle nav-div-ul-li">
                                   <p className="nav-ul-li-p"><img  className="hover-btn" src={github} /></p>
                               </li>

                           </ul>
                       </div>
                   </div>
                </div>

                <div className="width-70per mar-auto height-70p disp-flex" >
                    <div className="width-200p main-logo-top-div">
                       <img src={smalllogo}/>
                    </div>

                    <div className="width-100per-400p ">
                        <ul className="noulstyle disp-flex ">
                            <li className="noulstyle  width-100per-devide-6 hover-li text-center">
                                <FontAwesomeIcon icon={faTv} />
                            </li>
                            <li className="noulstyle  width-100per-devide-6 hover-li">
                                <ScrollDropDown />
                            </li>
                            <li className="noulstyle  width-100per-devide-6 hover-li" >
                                <p>API</p>
                            </li>
                            <li className="noulstyle  width-100per-devide-6 hover-li">
                                <p>TEST</p>
                            </li>
                            <li className="noulstyle  width-100per-devide-6 building" >
                                <p>창고</p>
                            </li>
                            <li className="noulstyle  width-100per-devide-6">

                            </li>
                        </ul>
                    </div>

                    <div className="width-200p ">
                        <div className="float-right height-100per width-70p"><img className="hover-btn" id="magnifier_img" src={magnifier2} /></div>
                    </div>
                </div>
            </nav>

            <div className="height-110p width-100per"></div>

        </>
    );
}
