import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BanksItems} from 'components/BanksItems';
import {transactionsActions} from 'actions/index';
import {SiteMap} from 'components/SiteMap';
import main from 'main.scss'
import withBanks from 'decorators/withBanks';

@withBanks
class AddTransactionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {amount: null, bankId: null};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const {amount, bankId} = this.state;
        if (amount === null && bankId === null) {
            let firstBank = this.props.banks[0];
            if (firstBank) {
                this.setState({
                    amount: "",
                    bankId: firstBank.id,
                });
            }
        }
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();
        let {amount, bankId} = this.state;
        const {dispatch} = this.props;

        if (amount && bankId) {
            dispatch(transactionsActions.addBankTransaction(amount, bankId));
        }
    }

    render() {
        return (
            <div>
                <SiteMap pageCode="AddTransactionPage"/>
                <div className={main.transaction_form__content}>
                    <form name="transaction-form" onSubmit={this.handleSubmit}>

                        <div className='transaction_form__group'>
                            <div>
                                <label className={main.transaction_form__group__amount_label}
                                       htmlFor="amount">Amount</label>
                                <input className={main.transaction_form__group__amount__input}
                                       type="text" name="amount" onChange={this.handleChange}/>
                                <div className="clear-class"></div>
                            </div>
                            <div>
                                <label
                                    className={main.transaction_form__group__bank__label}
                                    htmlFor="bankId">Bank Name</label>
                                <BanksItems className={main.transaction_form__group__bank__select}
                                            onChange={this.handleChange}/>
                            </div>
                            <div className={main.clear__class}></div>
                            <div className={main.transaction_form__group__button}>
                                <button>Add</button>
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
    const {transactions, banks} = state;
    return {
        transactions: transactions,
        banks: banks.banks
    };
}

const connectedAddTransactionPage = connect(mapStateToProps)(AddTransactionPage);
export {connectedAddTransactionPage as AddTransactionPage};

