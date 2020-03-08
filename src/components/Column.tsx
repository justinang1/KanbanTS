import React from 'react';

import '../style/Board.css';


type ColProps = {
  name: string
}


function Column({name} : ColProps) {
  return (  
    <div className="board-col">
      <div className="col-header">
        {name}
      </div>
    </div>
  );
}

export default Column;