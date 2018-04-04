import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BankName} from 'components/index';
import {transactionsActions} from 'actions/index';
import main from 'main.scss'

class Transaction extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id : this.props.transactionItem.id
        };
    }

    handleDelete(e) {
        this.props.dispatch(transactionsActions.deleteTransaction(this.state.id));
    }

    render() {
        return (
            <div className="transaction-item">
                <div>

                    <div className={main.table__cell}>
                        {this.props.transactionItem.id}
                    </div>
                    <div className={main.table__cell}>
                        {this.props.transactionItem.bankId}
                    </div>
                    <div className={main.table__cell}>
                        <div>{this.props.transactionItem.amount}</div>
                    </div>
                    <div className={main.table__cell}>
                        <BankName key={this.props.transactionItem.id}
                                               bankId={this.props.transactionItem.bankId}
                                               transactionItem={this.props.transactionItem}
                                               banksMap={this.props.banksMap}
                        />
                    </div>
                    <div className={main.table__cell}>
                        <button onClick={(e) => this.handleDelete(e)}> Delete </button>
                    </div>
                    <div className={main.clear__class}></div>
                </div>
            </div>
        );
    }
}

const connectedTransaction = connect()(Transaction);
export { connectedTransaction as Transaction };
