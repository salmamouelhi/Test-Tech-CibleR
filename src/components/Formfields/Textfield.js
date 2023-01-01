import React from 'react';

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
      />
    </div>
  )
}

export default Formfield;