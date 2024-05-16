import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Create from "./Components/Create";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Read from "./Components/Read";
import Update from "./Components/Update";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Create></Create>}></Route>
          <Route path="/read" element={<Read></Read>}></Route>
          <Route path="/update" element={<Update></Update>}></Route>
          {/* <Create></Create> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
