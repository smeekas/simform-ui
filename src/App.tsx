import React, { MouseEventHandler } from "react";
import Button from "./components/Button/Button";
import Divider from "./components/Divider/Divider";

function App() {
  const ref = React.useRef<HTMLButtonElement>(null);
  const handler: MouseEventHandler = (e) => {
    // console.log(ref)
  };
  return (
    <div className="App">
      <div>hello</div>
      <Button size="large" ghost onClick={handler} varient="primary" />
      <Button size="medium" ghost onClick={handler} varient="primary" />
      <Button onClick={handler} varient="dashed" />
      <Divider></Divider>
      <Divider varient="dashed"></Divider>
      <Divider orientation="left">hello</Divider>
      <Divider orientation="center">hello</Divider>
      <Divider orientation="right">Hello</Divider>
      <Divider varient="dashed" orientationMargin={20} orientation="left">
        hello
      </Divider>
      <Divider varient="dashed">hello</Divider>
      <Divider varient="dashed" orientationMargin={50} orientation="right">
        hello
      </Divider>
      hello
      <Divider type="vertical"></Divider>
      Hello World!
      <Divider type="vertical"></Divider>
      {/* <Divider type="horizontal">rgt</Divider> */}
    </div>
  );
}

export default App;
//TODO COLOR VARIABLES
//TODO button component
//TODO --> button default design
//TODO --> button varient design design
//TODO --> button icon support
