import "./styles.css";
import { useState, useCallback, useMemo } from "react";
import Count from "./Count";
import Button from "./Button";

export default function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // const handleCount1 = () => {
  //   setCounter1(counter1 + 1);
  // };

  const handleCount1 = useCallback(
    () => setCounter1((counter1) => counter1 + 1),
    [setCounter1]
  );

  // const handleCount2 = () => {
  //   setCounter2(counter2 + 1);
  // };

  const handleCount2 = useCallback(
    () => setCounter2((counter2) => counter2 + 1),
    [setCounter2]
  );

  return (
    <div className="App">
      <Count count={counter1} name="Counter1" />
      <Button onClick={handleCount1} text="Counter1" />
      <Count count={counter2} name="counter2" />
      <Button onClick={handleCount2} text="Counter2" />
    </div>
  );
}
