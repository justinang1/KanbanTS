import React, { useEffect } from 'react';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

import '../style/Board.css';

import Column from './Column';

import { sendMessage } from '../store/system/actions';

interface System {
  system: { };
};

const typedUseSelector: TypedUseSelectorHook<System> = useSelector;

function Board() {
  const system = typedUseSelector(state => state.system);
  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(sendMessage({text: 'Implement Redux Store', id: 1}));
  //   dispatch(sendMessage({text: 'Implement Task Creation', id: 1}));
  //   dispatch(sendMessage({text: 'Implement Header Colors', id: 2}));
  // }, [dispatch]);
  console.log(system);
  return (  
    <div className="main-board">
      <div className="col-container">
        <Column name="To Do" id={0}/>
        <Column name="In Dev" id={1}/>
        <Column name="Done" id={2}/>
      </div>
    </div>
  );
}

export default Board;