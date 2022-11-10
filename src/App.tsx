import React, { MouseEventHandler, useState } from "react";
import Button from "./components/Button/Button";
import Divider from "./components/Divider/Divider";
import Toggle from "./components/Toggle/Toggle";

function App() {
  return (
    <div className="App">
      <div>hello</div>

      <Toggle disabled onChange={(checked, e) => console.log(checked)} />
    </div>
  );
}

export default App;
