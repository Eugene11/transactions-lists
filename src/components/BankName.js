import React, {Component} from 'react';
import {connect} from 'react-redux';
import withBanks from 'decorators/withBanks';

@withBanks
class BankName extends Component {
    render() {
        const bankName = this.props.banksMap.get(this.props.bankId);
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
    const {banks} = state;
    return {
        banks: banks.banks
    };
}

const connectedBankName = connect(mapStateToProps)(BankName);
export {connectedBankName as BankName};