import {combineReducers} from 'redux';
import {authentication} from 'reducers/authentication.reducer';
import {alert} from 'reducers/alert.reducer';
import {banks} from 'reducers/banks.reducer';
import {transactions} from 'reducers/transactions.reducer';

const rootReducer = combineReducers({
    authentication,
    banks,
    alert,
    transactions
});

export default rootReducer;
