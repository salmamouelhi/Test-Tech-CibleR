import React , {useState} from 'react';
import {getImagePath} from "../tools/toolbox";
import PopUpLogin from './popUpLogin';



const Landing = ({setScreen}) => {

  
  const [show, setShow] = useState(false);

  const handleCLick = () => {
    setShow(true);
  }

  return (
    <>
    <div className="right">
      <button onClick={handleCLick}>Je me connecte</button>
      <PopUpLogin show={show} setShow={setShow}/>
    </div>
     
    </>
  )
}

export default Landing;