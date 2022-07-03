import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/index.css"
import SystemNavBar from "./components/Headers/SystemNavBar.js";

import Board from "./route/Board.js";
import Document from "./route/Document.js";

function App() {
  return (
      <BrowserRouter>
          <SystemNavBar />
          <Routes>
              <Route path="/" element={<Board />} />
              <Route path="/board/*" element={<Board />} />
              <Route path="/document/*" element={<Document />} />
          </Routes>
      </BrowserRouter>
  );
}


export default App;
