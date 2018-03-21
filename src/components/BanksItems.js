import React, { Component } from 'react';
import { connect } from 'react-redux';
import {banksActions} from "../actions";

class BanksItems extends Component {

    componentDidMount() {
        let banksData =  [ {"id": 1, "name": "Bank 1"}, {"id": 2, "name": "Bank 2"}, {"id": 3, "name": "Bank 3"},
            {"id": 4, "name": "Bank 4"}, {"id": 5, "name": "Bank 5"}];
        localStorage.setItem("banks", JSON.stringify(banksData));
        this.props.dispatch(banksActions.getBanks());
    }

    render() {
        let listBanks;
        if ( this.props.banks !== undefined ) {
            listBanks = this.props.banks.map((item) =>
                <option key={item.id} value={item.id}>{item.name}</option>
            );
        }

        return (
            <div className={this.props.className}>
                <div>
                    <select name="bankId" value={this.props.bankId} onChange={this.props.onChange}
                            disabled={this.props.disabled}>
                        {listBanks}
                    </select>
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

const connectedBanksList = connect(mapStateToProps)(BanksItems);
export { connectedBanksList as BanksItems };


