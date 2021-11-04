import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import JournalTaskList from "./components/JournalTaskList.jsx";
import { journalSelector,  } from "./journalSlice";

import TextBox from "./components/TextBox.jsx";

const Journal = () => {
  const { tasks, isTaskCreated, isTaskDeleted, isTaskLoading } = useSelector(
    journalSelector
  );

  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");
  const [taskCreated, setTaskCreated] = useState(isTaskCreated);
  const [taskDeleted, setTaskDeleted] = useState(isTaskDeleted);

  useEffect(() => {

  }, [dispatch, taskCreated, taskDeleted])

  const onSubmit = (e) => {
    e.preventDefault();

    if (newTask === "") return null;
    setNewTask("");
    setTaskCreated(!taskCreated);
  };

  const onChange = (e) => {
    setNewTask(e.target.value);
  };
  return (
    <div className='journal-wrapper'>
      <TextBox onSubmit={onSubmit} newTask={newTask} onChange={onChange} />
      <JournalTaskList
        taskDeleted={taskDeleted}
        setTaskDeleted={setTaskDeleted}
        isLoading={isTaskLoading}
        tasks={tasks}
      />
    </div>
  );
};

export default Journal;
