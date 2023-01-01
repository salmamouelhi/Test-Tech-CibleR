import React from 'react'
import {CiblerContext} from "../../tools/toolbox";
import Textfield from "./Textfield";
import Checkboxfield from "./Checkboxfield";

const Formfields = (props) => {
  console.log(props)
  switch (props.type) {
    case 'CHECKBOX':
      return <Checkboxfield {...props} />
    default:
      return <Textfield {...props} />;
  }
}

export default Formfields;