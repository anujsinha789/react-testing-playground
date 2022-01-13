import React, { memo } from "react";

function Button({ text, onClick }) {
  console.log(text, " button rerendered");
  return (
    <button data-testid="counter_btn" onClick={onClick}>
      {text}
    </button>
  );
}

export default memo(Button);
