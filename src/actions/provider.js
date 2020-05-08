import Axios from "axios";
import { API_URL } from "../utilities/common";

const PROVIDER = 'PROVIDER';

export const PROVIDER_READ = `${PROVIDER}_READ`;
export const PROVIDER_READ_PENDING = `${PROVIDER_READ}_PENDING`;
export const PROVIDER_READ_FULFILLED = `${PROVIDER_READ}_FULFILLED`;
export const PROVIDER_READ_REJECTED = `${PROVIDER_READ}_REJECTED`;
export const PROVIDER_READ_FILTER = `${PROVIDER_READ}_FILTER`;

  export const providerRead = () => {
    return (dispatch) => {
      dispatch({
        type: PROVIDER_READ,
        payload: Axios.get(`${API_URL}providers?include=locations%2Cschedules.location&page%5Bnumber%5D=1&page%5Bsize%5D=10`)
      });
    }
  }
  export const filterProviderByService = serviceName => {
    return (dispatch) => {
      dispatch({
        type: PROVIDER_READ_FILTER,
        payload: serviceName
      });
    }  
  }