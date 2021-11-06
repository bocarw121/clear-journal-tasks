import React, { useContext } from "react";
import JournalTask from "./JournalTask";
import "../Journal.css";
import { journalTaskContext } from "../journalTaskContext";

const bgColors = [
  "rgb(240, 95, 95)",
  "rgb(60, 71, 224)",
  "rgb(53, 151, 29)",
  "rgb(64, 70, 62)",
];

const getBgColors = (index) => bgColors[index % bgColors.length];

const JournalTaskList = () => {
  const tasksCtx = useContext(journalTaskContext);
  return (
    <div className="journal-list-container">
      <ul className="flex margin-adjust">
        {tasksCtx.tasks.map(({ task, isComplete, id }, index) => {
          const taskLength = task.length;

          return (
            <li
              className={`task ${isComplete && "task-completed"}
                ${taskLength > 40 && "height-adjust"}`}
              key={index}
              style={{ backgroundColor: getBgColors(index) }}
            >
              <JournalTask
                index={index}
                id={id}
                isComplete={isComplete}
                taskLength={taskLength}
              >
                <p>{task}</p>
              </JournalTask>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default JournalTaskList;
