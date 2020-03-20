import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { hideTagSelector } from '../store/system/actions';

import { SystemState } from '../store/system/types';

import '../style/Tag.css';

interface System {
  system: SystemState
};

const typedUseSelector: TypedUseSelectorHook<System> = useSelector;

function Tag() {

  const system = typedUseSelector(state => state.system);
  const dispatch = useDispatch();

  console.log(system);

  const handleClose = () => dispatch(hideTagSelector());

  return (  
    <Modal show={system.show_tag} onHide={handleClose}>
      <Modal.Header closeButton>
          <Modal.Title className="tag-header">Add Tags</Modal.Title>
        </Modal.Header>
        <Modal.Body className="tag-selection">
          <div className="tag tag-primary" key={0}>
            Primary
          </div>
          <div className="tag tag-secondary" key={1}>
            Secondary
          </div>
          <div className="tag tag-urgent" key={3}>
            Urgent
          </div>
          <div className="tag tag-warning" key={4}>
            Warning
          </div>
          <div className="tag tag-technical" key={5}>
            Technical
          </div>
          <div className="tag tag-devops" key={6}>
            DevOps
          </div>
          <div className="tag tag-coding" key={7}>
            Coding
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className="tag-controls">
            Cancel
          </Button>
          <Button variant="secondary" onClick={handleClose} className="tag-controls">
            Save Changes
          </Button>
        </Modal.Footer>
    </Modal>
  );
}

export default Tag;