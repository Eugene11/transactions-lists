import {banksService} from "../services";
import {banksConstants} from "../constants";

export const banksActions = {
    getBanks
};

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
