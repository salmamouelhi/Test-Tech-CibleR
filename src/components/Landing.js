import React , {useState} from 'react';
import {getImagePath} from "../tools/toolbox";
import PhonePopup from './popUpLogin';



const Landing = ({setScreen}) => {
  
  const [show, setShow] = useState(false);

  const handleCLick = () => {
    setShow(true);
  }

  return (
    <>
    
     <div className="right">
      <button onClick={handleCLick}>Je me connecte</button>
      <PhonePopup show={show} setShow={setShow}/> 
     
    </div> 
     
    </>
  )
}

export default Landing;