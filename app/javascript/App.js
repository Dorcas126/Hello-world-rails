import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { fetchRandomMessage } from './actions/messagesActions';
import Greeting from './components/Greeting';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  );
};

export default App;