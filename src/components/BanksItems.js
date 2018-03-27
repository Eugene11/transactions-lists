import React, { Component } from 'react';
import { connect } from 'react-redux';

class BanksItems extends Component {

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


