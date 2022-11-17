import React, {
  MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import Button from "./components/Button/Button";
import Divider from "./components/Divider/Divider";
import Rating from "./components/Rating/Rating";
import Stack from "./components/Stack/Stack";
import Testing from "./Testing";

function App() {
  const ref = React.useRef<HTMLButtonElement>(null);
  const handler: MouseEventHandler = (e) => {
    // console.log(ref)
  };
  const changeHandler = useCallback(() => console.log(), []);
  useEffect(() => {
    console.log("worked");
  }, [changeHandler]);
  const [ran, setRan] = useState(1);
  return (
    <div className="App">
      <div>hello</div>
      <input
        type={"range"}
        value={ran}
        onChange={(e) => setRan(+e.target.value)}
        min={1}
        max={5}
      />
      <Rating
        value={ran}
        count={10}
        allowClear
        character="S"
        onHoverChange={(count) => {
          console.log(count);
        }}
        onChange={changeHandler}
      />
    </div>
  );
}

export default App;
