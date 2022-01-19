import { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const journalTaskContext = createContext();

const storage = localStorage;

const JournalTaskContextProvider = ({ children }) => {
  const storedTasks = storage.getItem('tasks');
  const [taskComplete, setTaskComplete] = useState(false);
  const [tasks, setTasks] = useState(JSON.parse(storedTasks) || []);

  useEffect(() => {
    storage.setItem('tasks', JSON.stringify(tasks));
    setTaskComplete(false);
  }, [tasks, taskComplete]);

  const addTodo = (task) => {
    const newTodo = {
      id: uuidv4(),
      task,
      isComplete: false,
    };

    setTasks((prevTask) => {
      storage.setItem('tasks', JSON.stringify(prevTask.concat(newTodo)));
      return prevTask.concat(newTodo);
    });
  };

  const removeTodo = (taskId) => {
    setTasks((prevTask) => {
      const filteredTask = prevTask.filter((task) => task.id !== taskId);
      storage.setItem('tasks', JSON.stringify(filteredTask));
      return filteredTask;
    });
  };

  const toggleIsComplete = (id) => {
    setTasks((prevTask) => {
      prevTask[id].isComplete = !prevTask[id].isComplete;

      setTaskComplete(!taskComplete);
      return prevTask;
    });
  };

  const contextValues = {
    tasks,
    addTodo,
    removeTodo,
    toggleIsComplete,
  };

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <journalTaskContext.Provider value={contextValues}>
      {children}
    </journalTaskContext.Provider>
  );
};

export default JournalTaskContextProvider;
