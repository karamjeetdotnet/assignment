import { combineReducers } from 'redux';
import serviceReducer from './service';
import providerReducer from './provider';

export default combineReducers({
    serviceReducer,
    providerReducer
});