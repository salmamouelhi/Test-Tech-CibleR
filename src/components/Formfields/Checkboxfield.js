import React from 'react';

const Checkboxfield = ({onChange, id, data, label, value, type, children}) => {
  return (
    <div className={`formfield ${type} ${id}`}>
      <input
        id={id}
        name={id}
        type={'checkbox'}
        value={value}
        onChange={(e) => onChange(e.target.checked, id)}
      />
      <label htmlFor={id}>{data || label || children}</label>
    </div>
  )
}

export default Checkboxfield;