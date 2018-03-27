import React, { Component } from 'react';
import { connect } from 'react-redux';

class TransactionBanksItems extends Component {
    render() {
        let bankName;
        if ( this.props.banks !== undefined ) {

            bankName = this.props.banks.map((item) => {
                if (item.id === this.props.bankId)
                    return <span key={this.props.transactionItem.id}>{item.name}</span>;
                else
                    return null;
            }
            );
        }

        return (
            <div className={this.props.className}>
                <div>
                    {bankName}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { banks } = state;
    return {
        banks: banks.banks
    };
}

const connectedTransactionBanksItems = connect(mapStateToProps)(TransactionBanksItems);
export { connectedTransactionBanksItems as TransactionBanksItems };