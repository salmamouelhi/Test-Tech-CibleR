import {CiblerContext} from "./toolbox";
import axios from "axios";


//login methode using axios
const postToLoginService = async (phoneNumber) => {
const endpoint = `${CiblerContext().endpoint}/api/bienvenus/login?customerId=318`;

const body = {
  phone: phoneNumber ,
  campaignId: 63080118,
  customerId: 318
};

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};
  const response = await axios.post(endpoint, body , {headers});
  return response.data;
}

export {
  postToLoginService,
};