import {banksService} from 'services/index';
import {banksConstants} from 'constants/index';

export const banksActions = {
    getBanks,
    fillBanks
};

function fillBanks() {
    let banks = banksService.fillBanks();
    return { type: banksConstants.BANKS_GET_SUCCESS, banks }
}

function getBanks() {

    return dispatch => {
        banksService.getBanks()
            .then(
                banks => {
                    dispatch(success(banks));
                },
                error => {
                    alert("Banks Error " + error);
                }
            );
    };

    function success(banks) { return { type: banksConstants.BANKS_GET_SUCCESS, banks } }
}
