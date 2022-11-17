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

function App() {
  const ref = React.useRef<HTMLButtonElement>(null);
  const handler: MouseEventHandler = (e) => {
    // console.log(ref)
  };
  const changeHandler = (count: number) => {
    console.log(count);
  };
  // useEffect(() => {
  //   console.log("worked");
  // }, [changeHandler]);
  const [ran, setRan] = useState(1);
  return (
    <div className="App">
      <div>hello</div>
      <input
        type={"range"}
        value={ran}
        onChange={(e) => setRan(+e.target.value)}
        min={1}
        max={10}
      />
      <Stack
        justifyContent="center"
        alignItems="center"
        direction="column"
        spacing={ran}
      >
        <h1>Item1</h1>
        <h1>Item1</h1>
        <h1>Item1</h1>
      </Stack>
    </div>
  );
}

export default App;
