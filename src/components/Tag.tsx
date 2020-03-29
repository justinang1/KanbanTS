import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { hideTagSelector, addTags } from '../store/system/actions';
import { TagID, TagMutator } from '../store/system/types';

import { SystemState } from '../store/system/types';

import '../style/Tag.css';

interface System {
  system: SystemState
};

const typedUseSelector: TypedUseSelectorHook<System> = useSelector;

function Tag() {

  const system = typedUseSelector(state => state.system);
  const dispatch = useDispatch();
  const [activeTags, setActiveTags] = useState([false, false, false, false, false, false, false]);

  // console.log(system)

  const handleClose = () => {
    dispatch(hideTagSelector({} as TagID));
    setActiveTags([false, false, false, false, false, false, false]);
  };

  const handleSave = () => {
    let newTags: number[] = [];
    activeTags.forEach((item, idx) => {
      if(item) {
        newTags.push(idx)
      }
    })
    let inputMutator: TagMutator = {id: system.tag_edit_col, idx: system.tag_edit_id, tags: newTags};
    dispatch(addTags(inputMutator));
    handleClose();
    // console.log(newTags)
  }

  return (  
    <Modal show={system.show_tag} onHide={handleClose}>
      <Modal.Header closeButton>
          <Modal.Title className="tag-header">Add Tags</Modal.Title>
        </Modal.Header>
        <Modal.Body className="tag-selection">
          <div className={"tag tag-primary " + ((activeTags[0]) ? "active" : "")} onClick={(_e) => {
            setActiveTags([!activeTags[0], ...activeTags.slice(1)])
          }}>
            Primary
          </div>
          <div className={"tag tag-secondary " + ((activeTags[1]) ? "active" : "")} onClick={(_e) => {
            setActiveTags([...activeTags.slice(0, 1), !activeTags[1], ...activeTags.slice(2)])
          }}>
            Secondary
          </div>
          <div className={"tag tag-urgent " + ((activeTags[2]) ? "active" : "")} onClick={(_e) => {
            setActiveTags([...activeTags.slice(0, 2), !activeTags[2], ...activeTags.slice(3)])
          }}>
            Urgent
          </div>
          <div className={"tag tag-warning " + ((activeTags[3]) ? "active" : "")} onClick={(_e) => {
            setActiveTags([...activeTags.slice(0, 3), !activeTags[3], ...activeTags.slice(4)])
          }}>
            Warning
          </div>
          <div className={"tag tag-technical " + ((activeTags[4]) ? "active" : "")} onClick={(_e) => {
            setActiveTags([...activeTags.slice(0, 4), !activeTags[4], ...activeTags.slice(5)])
          }}>
            Technical
          </div>
          <div className={"tag tag-devops " + ((activeTags[5]) ? "active" : "")} onClick={(_e) => {
            setActiveTags([...activeTags.slice(0, 5), !activeTags[5], ...activeTags.slice(6)])
          }}>
            DevOps
          </div>
          <div className={"tag tag-coding " + ((activeTags[6]) ? "active" : "")} onClick={(_e) => {
            setActiveTags([...activeTags.slice(0, 6), !activeTags[6]])
          }}>
            Coding
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className="tag-controls">
            Cancel
          </Button>
          <Button variant="secondary" onClick={handleSave} className="tag-controls">
            Save Changes
          </Button>
        </Modal.Footer>
    </Modal>
  );
}

export default Tag;