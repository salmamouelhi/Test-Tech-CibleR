import React from 'react';
import './Textfields.css';

const Formfield = ({onChange, id, label, value, placeholder, type, children}) => {
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
        placeholder={"Votre numéro de télephone"}
        className = "inputPhoneNumber"
      />
    </div>
  )
}

export default Formfield;