import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BanksItems} from "./BanksItems";
import {transactionsActions} from "../actions";

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

                    <div className="table-cell table-cell-id-column">
                        {this.props.transactionItem.id}
                    </div>
                    <div className="table-cell table-cell-column">
                        {this.props.transactionItem.bankId}
                    </div>
                    <div className="table-cell table-cell-column">
                        <div>{this.props.transactionItem.amount}</div>
                    </div>
                    <div className="table-cell table-cell-column">
                        <BanksItems bankId={this.props.transactionItem.bankId} disabled={true}/>
                    </div>
                    <div className="table-cell table-cell-column">
                        <button onClick={(e) => this.handleDelete(e)}> Delete </button>
                    </div>
                    <div style={{ clear: "both" }}></div>
                </div>
            </div>
        );
    }
}

const connectedTransaction = connect()(Transaction);
export { connectedTransaction as Transaction };
