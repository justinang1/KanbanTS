import React from 'react';

import '../style/Board.css';

import Task from './Task';

type ColProps = {
  name: string,
  id: number
}


function Column({name, id} : ColProps) {
  let headerColor: string = "";
  let childElem: Array<Object> = [];
  switch(id){
    case 0:
      headerColor = "header-red";
      childElem.push(<Task text="test text 1" id={0}/>)
      break;
    case 1:
      headerColor = "header-orange";
      childElem.push(<Task text="test text 2" id={0}/>)
      break;
    case 2:
      headerColor = "header-green";
      // childElem.push(<Task text="test text 3" id={0}/>)
      break;
    default:
      break;
  }
  console.log(childElem);
  return (
    <div className="board-col">
      <div className={"col-header " + headerColor}>
        {name}
      </div>
      {(childElem) ? childElem : <div></div>}
    </div>
  );
}

export default Column;