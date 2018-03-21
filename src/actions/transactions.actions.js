import {transactionsConstants} from "../constants";
import {transactionsService} from "../services";

export const transactionsActions = {
    addBankTransaction,
    getTransactions,
    deleteTransaction
};

function addBankTransaction(amount, bankId) {
    let transaction = transactionsService.addBankTransaction(amount, bankId);
    return { type: transactionsConstants.ADDED_TRANSACTION,
        lastTransaction: transaction
    }
}

function getTransactions() {
    return dispatch => {
        transactionsService.getTransactions()
            .then(
                transactions => {
                    dispatch(success(transactions));
                },
                error => {
                    alert("transactions Error " + error);
                }
            );
    };

    function success(transactions) { return { type: transactionsConstants.TRANSACTIONS_GET_SUCCESS, transactions } }
}

function deleteTransaction(id) {
    let newBankTransactions = transactionsService.deleteTransaction(id);
    return { type: transactionsConstants.DELETED_TRANSACTION,
        transactions: newBankTransactions
    }
}
