import React, { useContext } from 'react';
import Confetti from 'react-dom-confetti';

import '../Journal.css';
import { journalTaskContext } from '../journalTaskContext';

const JournalTask = ({ children, index, id, taskLength, isComplete }) => {
  const tasksCtx = useContext(journalTaskContext);
  return (
    <div>
      <div className="action-btn-wrapper">
        <button
          className={`remove-task ${taskLength > 40 && 'remove-task-adjust'}`}
          aria-label="remove task"
          key="remove"
          onClick={() => {
            tasksCtx.removeTodo(id);
          }}
        >
          Remove
        </button>
        <button
          className={`complete-task ${
            taskLength > 40 && 'complete-task-adjust'
          }`}
          aria-label="complete task"
          key="complete"
          onClick={() => {
            tasksCtx.toggleIsComplete(index);
          }}
        >
          {isComplete ? 'Redo' : 'Done'}
          <Confetti
            active={isComplete}
            config={{
              spread: 90,
              width: '15px',
              elementCount: 100,
            }}
          />
        </button>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default JournalTask;
