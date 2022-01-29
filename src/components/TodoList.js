import React from "react";

const TodoList = (props) => {
  return (
    <div className="TodoList-container">
      <ul className="TodoList">{props.children}</ul>
    </div>
  );
};

export default TodoList;
