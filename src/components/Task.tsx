import React from 'react';
import { useDispatch } from 'react-redux';

import '../style/Board.css';

import { createTODOMessage, createInDevMessage, createDoneMessage } from '../store/system/actions';
import { advanceTodoMessage, advanceInDevMessage, previousDoneMessage, previousInDevMessage } from '../store/system/actions';
import { Message, MessageExtract } from '../store/system/types';

type ColProps = {
  text: string,
  type: number,
  id: number,
  idx: number
}

function Task({text, type, id, idx} : ColProps) {
  let pushActions : {(text: Message) : void}[] = [createTODOMessage, createInDevMessage, createDoneMessage];
  let advActions: {(id: MessageExtract) : void}[] = [advanceTodoMessage, advanceInDevMessage];
  let prevActions: {(id: MessageExtract) : void}[] = [previousInDevMessage, previousDoneMessage];
  const dispatch = useDispatch();

  return (  
    <div className='task-row'>
      <span className='left-angle'>
      {(id > 0 && type > -1) ? 
      <span onClick={(_e) => 
      {dispatch(prevActions[id-1]({id: idx} as MessageExtract))}}>
        &#x2039;
      </span> : undefined}
      </span>
      <span className={type < 0 ? 'create-text' : 'task-text'} onClick={(e) => {
        if (type < 0) {
          var inputText = prompt();
          if (inputText) {
            dispatch(pushActions[id]({text: inputText} as Message));
          }
        }
      }}>
        <div className="task-descriptor">
          <span>{text}</span>
          {type < 0 ? undefined : <span className="task-tags">+ Tags</span>}
        </div>
      </span>
      <span className='right-angle'>
      {(id < 2 && type > -1) ? 
      <span onClick={(_e) => 
      {dispatch(advActions[id]({id: idx} as MessageExtract))}}>
        &#8250;
      </span> : undefined}
      </span>
    </div>
  );
}

export default Task;