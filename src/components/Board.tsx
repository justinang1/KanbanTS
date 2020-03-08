import React from 'react';

import '../style/Board.css';

import Column from './Column';

function Board() {
  return (  
    <div className="main-board">
      <div className="col-container">
        <Column name="To Do"/>
        <Column name="In Dev"/>
        <Column name="Done"/>
      </div>
    </div>
  );
}

export default Board;