import React from "react";
import Navbar from "./components/Navbar/Navbar";
import RightBar from "./components/RightBar/RightBar";
import WorkSpace from "./components/WorkSpace/Workspace";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row w-100">
        <div className="col-md-9">
          <WorkSpace />
        </div>
        <div className="col-md-3 ">
          <RightBar />
        </div>
      </div>
    </div>
  );
}

export default App;
