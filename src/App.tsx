import React, { MouseEventHandler } from 'react';
import Button from './components/Button/Button';


function App() {
  const ref=React.useRef<HTMLButtonElement>(null);
  const handler:MouseEventHandler=(e)=>{
    // console.log(ref)
  }
  return (
    <div className="App">
    <div >hello</div>
    <Button size='large'    ghost onClick={handler} varient="primary" />
    <Button size='medium'   ghost onClick={handler} varient="primary" />
    <Button     onClick={handler} varient="dashed" />
    </div>
  );
}

export default App;
//TODO COLOR VARIABLES
//TODO button component
 //TODO --> button default design
 //TODO --> button varient design design
 //TODO --> button icon support 


 