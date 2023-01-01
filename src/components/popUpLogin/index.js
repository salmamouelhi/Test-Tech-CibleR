import React, { useState } from 'react';
import NoBudget from '../Validation';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Formfield from '../Formfields/Textfield';
import './index.css';
import { postToLoginService } from '../../tools/apitools';


const PhonePopup = (props) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [behaviorId, setBehaviorId] = useState('');


  //close modal and setting states to default 
  const handleClose = () => {
    props.setShow(false);
    setPhoneNumber('');
    setBehaviorId('');
  }

  //getting postToLoginService and setting the behavior id to bihavior id state 
  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await postToLoginService(phoneNumber);
    setBehaviorId(result.behaviorId);
  }
  return (
    <div>
        <Modal 
          show={props.show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}   
        >
        <Modal.Header  className="header" closeButton>
        <Modal.Title className="title">Welcome to CibleR </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit}>
        <Formfield 
         id="phoneId" value={phoneNumber} onChange={setPhoneNumber}
        />
        <button type="submit" className = "login-button">Login</button>
       </form>
       </Modal.Body>
        <Modal.Footer> 
        {behaviorId && <NoBudget behaviorId={behaviorId} /> }
      </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PhonePopup;