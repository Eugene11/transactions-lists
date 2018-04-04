import React, { Component } from 'react';
import { connect } from 'react-redux';
import {transactionsActions} from 'actions/index';


function mapStateToProps(state) {
    const { transactions } = state.transactions;
    return {
        transactions
    };
}


const withTransactions = (WrapedComponent) => {
    @connect(mapStateToProps)
    class AsyncComponent extends Component {

        constructor(props) {
            super(props);
            this.state = {}
        }

        componentWillMount = async () => {
            await this.props.dispatch(transactionsActions.getTransactions());
        }


        render() {

            if (!this.props.transactions)
                return null;
            return (
                <WrapedComponent {...this.props}  />
            );
        }
    }
    return AsyncComponent;
}
export default withTransactions;