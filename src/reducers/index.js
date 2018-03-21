import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { alert } from './alert.reducer';
import { banks } from './banks.reducer';
import { transactions } from './transactions.reducer';

const rootReducer = combineReducers({
    authentication,
    banks,
    alert,
    transactions
});

export default rootReducer;
