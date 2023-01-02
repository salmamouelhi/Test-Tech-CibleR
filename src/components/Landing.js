import React , {useState} from 'react';
import PhonePopup from './popUpLogin';
import '../index.css';



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