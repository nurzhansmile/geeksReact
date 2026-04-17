import { Button } from "antd";
import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount((count)=> count+1 );
  };
  console.log("click", count);

  return (
    <div>
      <h2>Counter - {count}</h2>
      <Button type="primary" onClick={onClick}>
        Click
      </Button>
    </div>
  );
};
