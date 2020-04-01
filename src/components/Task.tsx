import React from 'react';
import { useDispatch } from 'react-redux';

import '../style/Board.css';
import '../style/Tag.css';

import Tag from './Tag';

import { createTODOMessage, createInDevMessage, createDoneMessage } from '../store/system/actions';
import { advanceTodoMessage, advanceInDevMessage, previousDoneMessage, previousInDevMessage } from '../store/system/actions';
import { showTagSelector } from '../store/system/actions';
import { Message, MessageExtract, TagID } from '../store/system/types';

type TaskProps = {
  text: string,
  type: number,
  id: number,
  idx: number,
  tags: number[]
}

interface tagDisplay {
  text: string,
  class: string
}

function Task({text, type, id, idx, tags} : TaskProps) {

  let pushActions : {(text: Message) : void}[] = [createTODOMessage, createInDevMessage, createDoneMessage];
  let advActions: {(id: MessageExtract) : void}[] = [advanceTodoMessage, advanceInDevMessage];
  let prevActions: {(id: MessageExtract) : void}[] = [previousInDevMessage, previousDoneMessage];
  const tagInfo: tagDisplay[] = [{text: 'Critical', class: 'tag tag-primary '}, {text: 'Enhancement', class: 'tag tag-secondary '}, 
  {text: 'Challenging', class: 'tag tag-urgent '}, {text: 'Hard', class: 'tag tag-warning '}, {text: 'Technical', class: 'tag tag-technical '}, 
  {text: 'DevOps', class: 'tag tag-devops '}, {text: 'Coding', class: 'tag tag-coding '}]
  const dispatch = useDispatch();

  return (  
    <div>
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
            dispatch(showTagSelector({id, idx} as TagID));
          }}>
            {(tags) ?  tags.map((item, idx) => {
            return (<div key={idx} className={tagInfo[item].class + "active"}>
              {/* <span>&times;</span>  */}
              {tagInfo[item].text}</div>)
            }) : "+ Tags"}
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
    <Tag />
    </div>
  );
}

export default Task;