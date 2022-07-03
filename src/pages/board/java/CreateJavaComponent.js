import React, {Component, useState} from "react";
import ScrollSideMenu from "../../../components/SideMenu/ScrollSideMenu";
import CkEditor5 from "../../../components/Editor/CkEditor5";

class CreateJavaComponent extends Component{

    render() {

        return(

            <div  className="width-70per mar-auto-0 disp-flex">
                <script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?skin=desert"></script>
                <div className="width-200p">
                    <ScrollSideMenu />
                </div>
                <div className="width-100per-200p mar-auto-0">
                    <div className="padding-trl-80p">
                    <CkEditor5 />
                    </div>
                </div>
            </div>
        );
    }
}

export  default CreateJavaComponent;