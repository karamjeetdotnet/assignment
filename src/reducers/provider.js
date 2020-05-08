import { PROVIDER_READ, PROVIDER_READ_PENDING, PROVIDER_READ_FULFILLED, PROVIDER_READ_REJECTED, PROVIDER_READ_FILTER } from "../actions/provider";

const defaultState = {
    providers: [],
    filteredProviders: [],
    processing: false,
    error: null
};

const providers = (state = defaultState, action) => {
    switch (action.type) {
        case PROVIDER_READ:
        case PROVIDER_READ_PENDING:
            return {
                ...state,
                processing: true,
            }
        case PROVIDER_READ_FULFILLED:
            return {
                ...state,
                processing: false,
                providers: [...action.payload.data.data],
                filteredProviders: [...action.payload.data.data]
            };
        case PROVIDER_READ_REJECTED:
            return {
                ...state,
                processing: false,
                error: action.payload
            };
        case PROVIDER_READ_FILTER: 
            return {
                ...state,
                filteredProviders: state.providers.filter(x => x.attributes.subspecialties.indexOf(action.payload) > -1)
            }
        default:
            return state;
    }
};

export default providers;