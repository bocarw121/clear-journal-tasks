import React from 'react';

import JournalTaskList from './components/JournalTaskList.jsx';
import TextBox from './components/TextBox.jsx';
import JournalTaskContextProvider from './journalTaskContext.jsx';

const Journal = () => {
  return (
    <JournalTaskContextProvider>
      <div className="journal-wrapper">
        <TextBox />
        <JournalTaskList />
      </div>
    </JournalTaskContextProvider>
  );
};

export default Journal;
