export const banksService = {
    getBanks,
    fillBanks
};

function fillBanks() {
    let banksData =  [ {"id": "1", "name": "Bank 1"}, {"id": "2", "name": "Bank 2"}, {"id": "3", "name": "Bank 3"},
        {"id": "4", "name": "Bank 4"}, {"id": "5", "name": "Bank 5"}];
    localStorage.setItem("banks", JSON.stringify(banksData));
    return banksData;
}
function getBanks() {

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
            let banks = JSON.parse(localStorage.getItem("banks"));
            return Promise.resolve(banks);
        });
}
