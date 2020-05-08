import Axios from "axios";
import { API_URL } from "../utilities/common";

const SERVICE = 'SERVICE';

export const SERVICE_READ = `${SERVICE}_READ`;
export const SERVICE_READ_PENDING = `${SERVICE_READ}_PENDING`;
export const SERVICE_READ_FULFILLED = `${SERVICE_READ}_FULFILLED`;
export const SERVICE_READ_REJECTED = `${SERVICE_READ}_REJECTED`;
export const SERVICE_READ_ACTIVE = `${SERVICE_READ}_ACTIVE`;

  export const serviceRead = () => {
    return (dispatch) => {
      dispatch({
        type: SERVICE_READ,
        payload: Axios.get(`${API_URL}services`)
      });
    }
  }
  export const activateService = id => {
    return (dispatch) => {
      dispatch({
        type: SERVICE_READ_ACTIVE,
        payload: id
      });
    }  
  }