import React, { MouseEventHandler } from "react";
import Button from "./components/Button/Button";

function App() {
  const ref = React.useRef<HTMLButtonElement>(null);
  const handler: MouseEventHandler = (e) => {
    console.log("clicked");
  };
  return (
    <div className="App">
      <div id="appTsx">hello</div>
      <Button loading onClick={handler}>
        loadit{" "}
      </Button>
      <Button onClick={handler}>loadit </Button>
    </div>
  );
}

export default App;

//TODO loading for button
