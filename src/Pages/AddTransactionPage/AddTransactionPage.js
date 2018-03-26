import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BanksItems} from 'components/BanksItems';
import {transactionsActions, banksActions} from 'actions/index';
import {SiteMap} from 'components/SiteMap';

class AddTransactionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {amount: null, bankId: null};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (!this.props.banks)
            this.props.dispatch(banksActions.getBanks());
    }

    componentWillReceiveProps(nextProps){

        if (this.props.banks !== nextProps.banks ) {
            let firstBank = nextProps.banks[0];
            if (firstBank) {
                this.setState({
                    amount : "",
                    bankId: firstBank.id,
                });
            }
        }

    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        let { amount, bankId } = this.state;
        const { dispatch } = this.props;
        if (amount && bankId) {
            dispatch(transactionsActions.addBankTransaction(amount, bankId));
        }
    }

    render() {
        return (
            <div className="transaction-add-form">
                <SiteMap pageCode="AddTransactionPage"/>
                <div className="transaction-form-content">
                    <form name="transaction-form" onSubmit={this.handleSubmit}>

                        <div className='transaction-form-group'>
                            <div>
                                <label className="transaction-form-group_amount-label" htmlFor="amount">Amount</label>
                                <input className="transaction-form-group_amount-input form-control"
                                       type="text" name="amount" onChange={this.handleChange} />
                                <div className="clear-class"></div>
                            </div>
                            <div>
                                <label className="transaction-form-group_bank-label" htmlFor="bankId">Bank Name</label>
                                <BanksItems className="transaction-form-group_bank-select" onChange={this.handleChange}/>
                            </div>
                            <div className="clear-class"></div>
                            <div className="transaction-form-group_button">
                                <button className="btn btn-primary">Add</button>
                            </div>

                            {this.props.transactions.lastTransaction &&
                            <div> Last added transaction bankId = {this.props.transactions.lastTransaction.bankId},
                                amount={this.props.transactions.lastTransaction.amount},
                                id={this.props.transactions.lastTransaction.id}</div>
                            }
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    const { transactions, banks } = state;
    return {
        transactions: transactions,
        banks: banks.banks
    };
}

const connectedAddTransactionPage = connect(mapStateToProps)(AddTransactionPage);
export { connectedAddTransactionPage as AddTransactionPage };

