import React from "react";
import { Route } from "react-router-dom";
import {Outlet, Routes} from "react-router";

// components
import SystemNavBar from "../components/Headers/SystemNavBar.js";


// views
import JAVA from "../pages/board/java/ListJavaComponent";
import JAVAC from "../pages/board/java/CreateJavaComponent";

export default function Board() {
  return (
    <>
      <div>
          <Routes>
              <Route path="/java" element={<JAVA />} />
              <Route path="/java/create-content" element={<JAVAC />} />
          </Routes>
      </div>
    </>
  );
}
