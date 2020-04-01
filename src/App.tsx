import React, { useEffect } from 'react';
// import logo from './logo.svg';

import './App.css';

import Board from '../src/components/Board';

function App() {
  useEffect(() => {
    document.title = "Kanban TS"
  }, []);
  
  return (
    <Board />
  );
}

export default App;