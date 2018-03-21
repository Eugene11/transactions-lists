import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Transaction} from '../../components/Transaction';
import {transactionsActions} from "../../actions/index";
import {SiteMap} from "../../components/SiteMap"
import {TableTransactionsHeader} from "../../components/TableTransactionsHeader"

class TransactionsPage extends Component {

    componentDidMount() {
        this.props.dispatch(transactionsActions.getTransactions());
    }

    render() {

        console.log(JSON.stringify(this.props.transactions));
        let transactions;

        if ( this.props.transactions !== undefined ) {
            transactions = this.props.transactions.map((item, index) =>
                <Transaction key={item.id} transactionItem={item} sortIndex={index}/>
            );
        }

        return (
            <div className="transaction-list">
                <SiteMap pageCode="TransactionsPage"/>
                <div className="transaction-content">
                    <TableTransactionsHeader />
                    <div>
                        {transactions}
                    </div>
                </div>
            </div>
        );
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

