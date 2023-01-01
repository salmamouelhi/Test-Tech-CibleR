import React, { useState } from 'react';
import NoBudget from '../Validation';
import { CiblerContext } from '../../tools/toolbox';
import { login } from '../../tools/apitools';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Formfield from '../Formfields/Textfield';
import './index.css';

const PhoneInputPopup = (props) => {
  
  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [behaviorId, setBehaviorId] = useState('');

  const handleClose = () => props.setShow(false);
  const handleShow = () => props.setShow(true);

  

  return (
    <>
      <Modal 
        show={props.show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}   
      >
       <Modal.Header  className="header" closeButton>
          <Modal.Title className="title">Welcome to cibleR </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Formfield
        onChange={event => setPhoneNumber(event.target.value)}/>
        </Modal.Body>
        <Modal.Footer> 
        <Button onClick={login(phoneNumber, setBehaviorId)}>Confirm</Button>
        {behaviorId && <NoBudget behaviorId={behaviorId} />}
        </Modal.Footer>
        </Modal>

    </>
  );
};

export default PhoneInputPopup;
