import React from 'react';

import '../style/Board.css';

import Task from './Task';

type ColProps = {
  name: string,
  id: number
}


function Column({name, id} : ColProps) {
  let headerColor: string = "";
  let childElem: Array<Object> = [<Task text='+ Click to Add Task' id={id} type={-1}/>];
  switch(id){
    case 0:
      headerColor = 'header-red';
      childElem.unshift(<Task text='Implement Task Creation' id={id} type={0}/>)
      childElem.unshift(<Task text='Implement Redux Store' id={id} type={0}/>)
      break;
    case 1:
      headerColor = 'header-orange';
      childElem.unshift(<Task text='test text 2' id={id} type={0}/>)
      break;
    case 2:
      headerColor = 'header-green';
      childElem.unshift(<Task text='Implement Header Colors' id={id} type={0}/>)
      // childElem.push(<Task text="test text 3" id={0}/>)
      break;
    default:
      break;
  }
  console.log(childElem);
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