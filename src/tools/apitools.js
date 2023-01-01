import React , {useState , useEffect} from "react";
import {CiblerContext} from "./toolbox";
import axios from "axios";
import NoBudget from "../components/Validation";



/*here make a POST call on this address `${CiblerContext().endpoint}/api/bienvenus/login?customerId=318`
with the body:
{
  phone: 'your phone',
  campaignId: 63080118,
  customerId: 318
}
and the headers:
    Accept: application/json
    Content-Type: application/json

 */

const login = async (phoneNumber , setBehaviorId ) => {
  await fetch(`${CiblerContext().endpoint}/api/bienvenus/login?customerId=318`, {
    method: 'POST',
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    phone: phoneNumber,
    campaignId: 63080118,
    customerId: 318
  })
  })
    .then(response => response.json())
    .then(data => {
      // Get behaviorId from server response and set it in state
      setBehaviorId(data.behaviorId);
    });
};

export{
  login,
};
