import React   from 'react';
import './Textfields.css';

const Formfield = ({onChange, id, label, value, placeholder, type, children}) => {
  
  const phoneNumberRegex = /^06\d{8}$/  ;
  const isPhoneNumber = phoneNumberRegex.test(value ); 
  
  return (
    <div className={`formfield ${type} ${id}`}>
        <span>
          {label || children}
        </span>
       
      <input
        type={'number'}
        value={value}
        id={id}
        onChange={(e) => onChange(e.target.value, id)}
        placeholder={"Enter a phone number"}
        className = "inputPhoneNumber"
        
      />
       <div className='testInput'>{isPhoneNumber ? 'Correcte Phone number' : 'Wrong number format'}</div> 
      
      
    </div>
     
  )
}

export default Formfield;