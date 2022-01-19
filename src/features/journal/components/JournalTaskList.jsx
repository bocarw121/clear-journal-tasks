import React, { useContext } from 'react';

import JournalTask from './JournalTask';
import '../Journal.css';
import { journalTaskContext } from '../journalTaskContext';

const bgColors = [
  'rgb(240, 95, 95)',
  'rgb(60, 71, 224)',
  'rgb(53, 151, 29)',
  'rgb(64, 70, 62)',
];

const bgColorsLowOpacity = [
  'rgba(240, 95, 95, 0.3)',
  'rgba(60, 71, 224, 0.3)',
  'rgba(53, 151, 29, 0.3)',
  'rgba(64, 70, 62, 0.3)',
];
/**
 *  Returns background color with low opacity
 *  for completed tasks and normal opacity for incomplete tasks
 * @param  {number} index
 * @param  {boolean} opacity=false
 */
const getBgColors = (index, opacity = false) => {
  if (opacity) {
    return bgColorsLowOpacity[index];
  } else {
    return bgColors[index];
  }
};

const JournalTaskList = () => {
  const tasksCtx = useContext(journalTaskContext);

  return (
    <div className="journal-list-container">
      <ul className="flex margin-adjust">
        {tasksCtx.tasks.map(({ task, isComplete, id }, index) => {
          const taskLength = task.length;

          return (
            <li
              className={`task ${taskLength > 40 && 'height-adjust'}`}
              key={index}
              style={{
                backgroundColor: isComplete
                  ? getBgColors(index, true)
                  : getBgColors(index),
              }}
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
