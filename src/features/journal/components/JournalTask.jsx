import React from "react";
import { useDispatch } from "react-redux";
import {
  toggleCompletedTask,
} from "../journalSlice";
import Confetti from "react-dom-confetti";
import "../Journal.css";

const JournalTask = ({
  children,
  id,
  isComplete,
  setTaskDeleted,
  taskDeleted,
  taskLength,
}) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className='action-btn-wrapper'>
        <button
          className={`remove-task ${taskLength > 40 && "remove-task-adjust"}`}
          aria-label='remove task'
          key='remove'
          onClick={() => {
            setTaskDeleted(!taskDeleted);
          }}
        >
          Remove
        </button>
        <button
          className={`complete-task ${
            taskLength > 40 && "complete-task-adjust"
          }`}
          aria-label='complete task'
          key='complete'
          onClick={() => {
            dispatch(toggleCompletedTask(id));
        
          }}
        >
          {isComplete ? "Redo" : "Done"}
          <Confetti
            active={isComplete}
            config={{ spread: 90, width: "15px", elementCount: 100 }}
          />
        </button>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default JournalTask;
