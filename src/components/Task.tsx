import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import '../style/Board.css';

import Tag from './Tag';

import { createTODOMessage, createInDevMessage, createDoneMessage } from '../store/system/actions';
import { advanceTodoMessage, advanceInDevMessage, previousDoneMessage, previousInDevMessage } from '../store/system/actions';
import { Message, MessageExtract } from '../store/system/types';

type TaskProps = {
  text: string,
  type: number,
  id: number,
  idx: number
}

function Task({text, type, id, idx} : TaskProps) {
  const [showTag, setShowTag] = useState(false);
  const memoizedHandleClick = useCallback(
    () => {
      console.log("Fired");
      setShowTag(!showTag);
    },
    [showTag],
  );

  let pushActions : {(text: Message) : void}[] = [createTODOMessage, createInDevMessage, createDoneMessage];
  let advActions: {(id: MessageExtract) : void}[] = [advanceTodoMessage, advanceInDevMessage];
  let prevActions: {(id: MessageExtract) : void}[] = [previousInDevMessage, previousDoneMessage];
  const dispatch = useDispatch();

  return (  
    <div>
    {showTag ? <Tag func={memoizedHandleClick}/> : undefined}
    <div className='task-row'>
      <span className='left-angle'>
      {(id > 0 && type > -1) ? 
      <span onClick={(_e) => 
      {dispatch(prevActions[id-1]({id: idx} as MessageExtract))}}>
        &#x2039;
      </span> : undefined}
      </span>
      <span className={type < 0 ? 'create-text' : 'task-text'} onClick={(_e) => {
        if (type < 0) {
          var inputText = prompt();
          if (inputText) {
            dispatch(pushActions[id]({text: inputText} as Message));
          }
        }
      }}>
        <div className="task-descriptor">
          <span>{text}</span>
          {type < 0 ? undefined : 
          <span className="task-tags"
          onClick={(_e) => {
            setShowTag(!showTag)
          }}>
            + Tags
          </span>
          }
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
    </div>
  );
}

export default Task;