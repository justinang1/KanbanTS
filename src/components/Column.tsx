import React from 'react';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import '../style/Board.css';

import Task from './Task';
import { SystemState, Message } from '../store/system/types';

interface System {
  system: SystemState
};

const typedUseSelector: TypedUseSelectorHook<System> = useSelector;

type ColProps = {
  name: string,
  id: number
}

function Column({name, id} : ColProps) {

  /* Variable Declarations */
  const system = typedUseSelector(state => state.system);
  let headerColor: string = "";
  let childElem: Array<Object> = [<Task text='+ Click to Add Task' id={id} type={-1} idx={-1} key={-1} />];
  let renderList: Message[] = [];

  // console.log(id)
  switch(id) {
    case 0:
      headerColor = 'header-red';
      renderList = system.todo_messages;
      break;
    case 1:
      headerColor = 'header-orange';
      renderList = system.in_dev_messages;
      break;
    case 2:
      headerColor = 'header-green';
      renderList = system.done_messages;
      break;
    default:
      break;
  }

  renderList.forEach((msg, idx) => {
    // console.log(msg, idx);
    childElem.unshift(<Task text={msg.text} id={id} type={0} key={idx} idx={idx}/>);
  })
  // console.log(renderList)
  return (
    <div className='board-col'>
      <div className={'col-header ' + headerColor}>
        {name}
      </div>
      {(childElem) ? childElem : <div></div>}
    </div>
  );
}

export default Column;