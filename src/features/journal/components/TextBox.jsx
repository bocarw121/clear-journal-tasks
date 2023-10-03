import React, { useContext, useRef } from 'react';

import '../Journal.css';
import { journalTaskContext } from '../journalTaskContext';

const TextBox = () => {
  const tasksTextInput = useRef(null);

  const tasksCtx = useContext(journalTaskContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newText = tasksTextInput.current.value;

    if (newText.trim().length === 0) {
      return;
    }

    tasksCtx.addTodo(newText);
    tasksTextInput.current.value = null;
  };

  return (
    <div className="text-box">
      <h2 className="text-box-title">Whats on your mind for today?</h2>
      <form onSubmit={handleSubmit}>
        <input
          // maxLength="180"
          className="journal-text"
          type="text"
          placeholder="Enter your task"
          ref={tasksTextInput}
        />
      </form>
    </div>
  );
};

export default TextBox;
