import {banksConstants} from 'constants/index';

export function banks(state = {}, action) {
    switch (action.type) {
        case banksConstants.BANKS_GET_SUCCESS:
            return {
                banks: action.banks
            };
        default:
            return state
    }
}
