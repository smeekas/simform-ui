import React, {
  MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import Button from "./components/Button/Button";
import Divider from "./components/Divider/Divider";
import Rating from "./components/Rating/Rating";
import Testing from "./Testing";

function App() {
  const ref = React.useRef<HTMLButtonElement>(null);
  const handler: MouseEventHandler = (e) => {
    // console.log(ref)
  };
  const changeHandler = useCallback(() => console.log(), []);

  const [ran, setRan] = useState(1);
  return (
    <div className="App">
      <div>hello</div>
      <Testing />
    </div>
  );
}

export default App;
