import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  return (
    <div className="text-white flex bg-gray-950">
      <Sidebar />

      {/* <Main /> */}
    </div>
  );
}

export default App;
