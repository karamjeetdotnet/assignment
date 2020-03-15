import { SERVICE_READ, SERVICE_READ_PENDING, SERVICE_READ_FULFILLED, SERVICE_READ_REJECTED } from "../actions/service";

const defaultState = {
    services: [],
    processing: false,
    error: null
};

const toasts = (state = defaultState, action) => {
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
                services: [...action.payload.data.data]
            };
        case SERVICE_READ_REJECTED:
            return {
                ...state,
                processing: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default toasts;