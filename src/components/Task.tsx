import React from 'react';

import '../style/Board.css';


type ColProps = {
  text: string,
  id: number
}

function Task({text} : ColProps) {
  return (  
    <div className="task-row">
      {text}
    </div>
  );
}

export default Task;