import React, {Component, useState} from "react";
import ScrollSideMenu from "../../../components/SideMenu/ScrollSideMenu";
import CkEditor5 from "../../../components/Editor/CkEditor5";
import EditComponent from "../../../components/Editor/EditComponent";
class CreateJavaComponent extends Component{

    render() {

        return(

            <div  className="width-70per mar-auto-0 disp-flex">
                <script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?skin=desert"></script>
                <div className="width-200p">
                    <ScrollSideMenu />
                </div>
                <div className="width-100per-200p mar-auto-0">
<<<<<<< HEAD
                    <div className="padding-trl-80p">
                    <EditComponent />
=======
                    <div className="padding-rl-80p-t-40p">
                    <CkEditor5 />
>>>>>>> 0af5ae96b21151bc0796cfe65a40ab08f64349cf
                    </div>
                </div>
            </div>
        );
    }
}

export  default CreateJavaComponent;