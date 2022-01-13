import React, { memo } from "react";
// import { isEqual } from "lodash";

function Count({ count, name }) {
  console.log(name, " label rerendered");
  return <h1>{count}</h1>;
}

export default memo(Count);
