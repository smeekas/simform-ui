import React, { MouseEventHandler } from "react";
import Button from "./components/Button/Button";

function App() {
  const ref = React.useRef<HTMLButtonElement>(null);
  const handler: MouseEventHandler = (e) => {
    // console.log(ref)
  };
  return (
    <div className="App">
      <div>hello</div>
      <Button shape="round" block onClick={handler} varient="primary" >hello</Button>
      <Button shape="circle" onClick={handler} >Upload Files</Button>
      <Button  ghost onClick={handler} varient="dashed" >
      fdjshgb
      </Button>
    <Button shape="circle"  varient="primary">icon</Button>
    </div>
  );
}

export default App;
//TODO COLOR VARIABLES
//TODO button component
//TODO --> button default design
//TODO --> button varient design design
//TODO --> button icon support
