import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Transaction} from 'components/Transaction';
import {SiteMap} from 'components/SiteMap'
import {TableTransactionsHeader} from 'components/TableTransactionsHeader'
import main from 'main.scss'
import withTransactions from 'decorators/withTransactions';
import withBanks from 'decorators/withBanks';

@withBanks
@withTransactions
class TransactionsPage extends Component {

    render() {

        const banksIdNameArray = this.props.banks.map((item) => {
            return [item.id, item.name];
        });
        const banksMap = new Map(banksIdNameArray);

        const transactions = this.props.transactions.map((item, index) =>
            <Transaction key={item.id+"__"+index} transactionItem={item} sortIndex={index} banksMap={banksMap}/>
        );

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
function mapStateToProps(state) {
    const {transactions } = state;
    return {
        transactions: transactions.transactions
    };
}

const connectedTransactionsPage = connect(mapStateToProps)(TransactionsPage);
export { connectedTransactionsPage as TransactionsPage };

