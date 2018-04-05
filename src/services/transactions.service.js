import Chance from 'chance'

export const transactionsService = {
    addBankTransaction,
    getTransactions,
    deleteTransaction
};

function addBankTransaction(amount, bankId) {
    let chance = new Chance();
    let banksTransactions = JSON.parse(localStorage.getItem("banksTransactions"));
    let newBankTransaction = {id: chance.natural(), "amount": amount, "bankId": bankId};
    if (banksTransactions === undefined || banksTransactions === null)
        banksTransactions = [];
    banksTransactions.push(newBankTransaction);
    localStorage.setItem("banksTransactions", JSON.stringify(banksTransactions));
    return newBankTransaction;
}

function getTransactions() {
    const requestOptions = {
        method: 'GET'
    };

    return fetch('/ok.json', requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }

            return response.json();
        })
        .then(ok => {
            let transactions = JSON.parse(localStorage.getItem("banksTransactions"));
            if (transactions === undefined || transactions === null)
                transactions = [];
            return Promise.resolve(transactions);
        });
}

function deleteTransaction(id) {
    let banksTransactions = JSON.parse(localStorage.getItem("banksTransactions"));
    let delIndex = banksTransactions.findIndex(trs => trs.id === id);
    banksTransactions.splice(delIndex, 1);
    localStorage.setItem("banksTransactions", JSON.stringify(banksTransactions));
    return banksTransactions;
}
