import React, { memo } from "react";
import { isEqual } from "lodash";

function Button({ text, onClick }) {
  console.log(text, " button rerendered");
  return <button onClick={onClick}>{text}</button>;
}

export default memo(Button, isEqual);
