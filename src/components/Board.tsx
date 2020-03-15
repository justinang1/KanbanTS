import React from 'react';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import '../style/Board.css';

import Column from './Column';

interface System {
  system: {
  };
};

const typedUseSelector: TypedUseSelectorHook<System> = useSelector;

function Board() {
  const system = typedUseSelector(state => state.system);
  console.log(system);
  return (  
    <div className="main-board">
      <div className="col-container">
        <Column name="To Do" id={0}/>
        <Column name="In Dev" id={1}/>
        <Column name="Done" id={2}/>
      </div>
    </div>
  );
}

export default Board;