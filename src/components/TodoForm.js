import React from "react";

const TodoForm = (props) => {
  return (
    <div className="TodoForm-container">
      <form className="TodoForm" onSubmit={props.onSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Add a task..."
          value={props.value}
          onChange={props.onChange}
          maxLength="40"
          ref={props.reference}
          required
        />
        <div className="btn-container">
          <button className="form-btn" type="submit">
            {!props.isEditing ? "Add a task" : "Edit Task"}
          </button>
          <button className="form-btn" type="button" onFocus={props.onClick}>
            {!props.isEditing ? "Clear tasks" : "Cancel"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
