import { FETCH_SERVICES } from '../actions/services.action';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_SERVICES:
            return action.payload;
        default:
            return state;
    }
};

