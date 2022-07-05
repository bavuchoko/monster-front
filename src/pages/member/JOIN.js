import React, {Component} from 'react';
import MemberlSideMenu from "../../components/SideMenu/MemberlSideMenu";





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
                    <MemberlSideMenu />
                </div>
                <div className="width-100per-200p mar-auto-0">
                    <div className="padding-rl-80p-t-40p">




                    </div>
                </div>
            </div>
        );
    }
}

export default ListJavaComponent;