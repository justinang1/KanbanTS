import React from 'react';
import { useDispatch } from 'react-redux';

import '../style/Board.css';

import { createTODOMessage, createInDevMessage, createDoneMessage } from '../store/system/actions';
import { Message } from '../store/system/types';

type ColProps = {
  text: string,
  type: number,
  id: number,
}

function Task({text, type, id} : ColProps) {
  let actions : {(text: Message) : void}[] = [createTODOMessage, createInDevMessage, createDoneMessage];
  const dispatch = useDispatch();

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
          dispatch(actions[id]({text: inputText} as Message));
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