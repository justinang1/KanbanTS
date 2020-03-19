import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

import '../style/Tag.css';

type TagProps = {
  func: {(visible: string) : void}
}

function Tag({ func } : TagProps) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  console.log(show);

  return (  
    <Modal show={show} onHide={handleClose}>
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