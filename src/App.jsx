import { useState } from "react";
import "./App.css";

import Main from "./components/Main";

function App() {
  return (
    <div className="text-white flex h-screen overflow-y-hidden bg-gray-950">
      <Main />
    </div>
  );
}

export default App;
