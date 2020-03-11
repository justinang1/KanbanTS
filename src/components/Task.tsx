import React from 'react';

import '../style/Board.css';


type ColProps = {
  text: string,
  type: number,
  id: number,
}

function Task({text, type, id} : ColProps) {
  return (  
    <div className='task-row'>
      <span className='left-angle'>
      {(id > 0 && type > -1) ? <span>
        &#x2039;
      </span> : undefined}
      </span>
      <span className={type < 0 ? 'create-text' : 'task-text'} onClick={(e) => {
        if (type < 0) {
          var inputText = prompt();
          alert(inputText);
        }
      }}>
        {text}
      </span>
      <span className='right-angle'>
      {(id < 2 && type > -1) ? <span>
        &#8250;
      </span> : undefined}
      </span>
    </div>
  );
}

export default Task;