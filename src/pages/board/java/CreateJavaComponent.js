import React, {Component, useState} from "react";
import ScrollSideMenu from "../../../components/SideMenu/ScrollSideMenu";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


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
                        <h2>Using CKEditor 5 build in React</h2>
                        <CKEditor
                            editor={ ClassicEditor }
                            data="<p>Hello from CKEditor 5!</p>"
                            onReady={ editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                console.log( { event, editor, data } );
                            } }
                            onBlur={ ( event, editor ) => {
                                console.log( 'Blur.', editor );
                            } }
                            onFocus={ ( event, editor ) => {
                                console.log( 'Focus.', editor );
                            } }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export  default CreateJavaComponent;