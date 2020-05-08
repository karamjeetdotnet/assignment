import { SERVICE_READ, SERVICE_READ_PENDING, SERVICE_READ_FULFILLED, SERVICE_READ_REJECTED, SERVICE_READ_ACTIVE } from "../actions/service";

const defaultState = {
    services: [],
    filteredServices: [],
    processing: false,
    error: null
};

const services = (state = defaultState, action) => {
    switch (action.type) {
        case SERVICE_READ:
        case SERVICE_READ_PENDING:
            return {
                ...state,
                processing: true,
            }
        case SERVICE_READ_FULFILLED:
            return {
                ...state,
                processing: false,
                services: [...action.payload.data.data],
                filteredServices: [...action.payload.data.data]
            };
        case SERVICE_READ_REJECTED:
            return {
                ...state,
                processing: false,
                error: action.payload
            };
        case SERVICE_READ_ACTIVE:
            return {
                ...state,
                filteredServices: state.services.map(x=> {
                    return {
                        ...x,
                        isActive: action.payload === x.id
                    }
                })
            }
        default:
            return state;
    }
};

export default services;