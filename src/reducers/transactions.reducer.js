import {transactionsConstants} from "../constants";

export function transactions(state = {}, action) {
    switch (action.type) {
            case transactionsConstants.ADDED_TRANSACTION:
                return {
                    lastTransaction: action.lastTransaction
                };
            case transactionsConstants.TRANSACTIONS_GET_SUCCESS:
                return {
                    transactions: action.transactions
                }
            case transactionsConstants.DELETED_TRANSACTION:
                return {
                    transactions: action.transactions
                }
        default:
            return state
    }
}
