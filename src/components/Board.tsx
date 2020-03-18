import React from 'react';

import '../style/Board.css';

import Column from './Column';

function Board() {
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