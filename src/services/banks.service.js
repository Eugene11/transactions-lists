export const banksService = {
    getBanks
};

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
