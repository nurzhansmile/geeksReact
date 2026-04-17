import { Button, Flex, Input } from "antd";
import { useState } from "react";

export const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  const onChange = (e) => {
    setInputValue(e.target.value);
  };
  
  const onClick = () => {
    if (!inputValue) return;
    setList((prev) => [...prev, inputValue]);
    setInputValue("");
    console.log(list);
  };

  const onKeyDown = (e) => (e.key === "Enter" ? onClick() : null);
  return (
    <div>
      <h2>List</h2>
      <Flex></Flex>
      <Flex>
        <Input
          type="text"
          placeholder="todo"
          value={inputValue}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <Button type="primary" onClick={onClick}>
          Click
        </Button>
      </Flex>
      <ul>
        {list.map((item, key) => (
          <li key={key}> {item} </li>
        ))}
      </ul>
    </div>
  );
};
