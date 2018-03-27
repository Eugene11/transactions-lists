import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Transaction} from 'components/Transaction';
import {Loading} from 'components/Loading';
import {transactionsActions, banksActions} from 'actions/index';
import {SiteMap} from 'components/SiteMap'
import {TableTransactionsHeader} from 'components/TableTransactionsHeader'
import main from 'main.scss'

class TransactionsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {loadingTransactions: true, loadingBanks: true};
    }

    componentDidMount() {
        this.props.dispatch(transactionsActions.getTransactions());
        this.props.dispatch(banksActions.getBanks());
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.transactions !== this.props.transactions) {
            this.setState({loadingTransactions: false});
        }
        if (nextProps.banks !== this.props.banks) {
            this.setState({loadingBanks: false});
        }
    }

    render() {
        let transactions;

        if ( this.props.transactions !== undefined ) {
            transactions = this.props.transactions.map((item, index) =>
                <Transaction key={item.id+"__"+index} transactionItem={item} sortIndex={index}/>
            );
        }

        if (this.state.loadingTransactions && this.state.loadingBanks) {
            return (
                <Loading></Loading>
            );
        }
        else {
            return (
                <div className="transaction-list">
                    <SiteMap pageCode="TransactionsPage"/>
                    <div className={main.transaction__content}>
                        <TableTransactionsHeader />
                        <div>
                            {transactions}
                        </div>
                    </div>
                </div>
            );
        }
    }
}
function mapStateToProps(state) {
    const {transactions } = state;
    return {
        transactions: transactions.transactions
    };
}

const connectedTransactionsPage = connect(mapStateToProps)(TransactionsPage);
export { connectedTransactionsPage as TransactionsPage };

