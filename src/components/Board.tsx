import React, { useEffect } from 'react';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

import '../style/Board.css';

import Column from './Column';
import { SystemState } from '../store/system/types';
import { createTODOMessage } from '../store/system/actions';

interface System {
  system: SystemState;
};

const typedUseSelector: TypedUseSelectorHook<System> = useSelector;

function Board() {
  const system = typedUseSelector(state => state.system);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(createTODOMessage({text: 'Saving Board State'}));
    dispatch(createTODOMessage({text: 'Implement Tagging'}));
    dispatch(createTODOMessage({text: 'Implement DB and GraphQL'}));
    dispatch(createTODOMessage({text: 'Final Touches'}));
  }, [dispatch]);
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