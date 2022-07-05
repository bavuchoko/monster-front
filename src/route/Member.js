import React from "react";
import { Route } from "react-router-dom";
import {Routes} from "react-router";



// views
import LOGIN from "../pages/member/Login";
import JOIN from "../pages/member/JOIN";

export default function Member(props) {
    return (
        <>
            <div>
                <Routes>
                    <Route path="/login" element={<LOGIN />} />
                    <Route path="/join" element={<JOIN />} />
                </Routes>
            </div>
        </>
    );
}
