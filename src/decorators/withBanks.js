import React, {Component} from 'react';
import {connect} from 'react-redux';
import {banksActions} from 'actions/index';

function mapStateToProps(state) {
    const {banks} = state.banks;
    return {
        banks
    };
}

const withBanks = (WrapedComponent) => {
    @connect(mapStateToProps)
    class AsyncComponent extends Component {

        constructor(props) {
            super(props);
            this.state = {}
        }

        componentWillMount = async () => {
            if (!this.props.banks)
                await this.props.dispatch(banksActions.getBanks());
        }

        render() {
            if (!this.props.banks)
                return null;

            let newProps = {};
            if (!this.props.banksMap) {
                const banksIdNameArray = this.props.banks.map((item) => {
                    return [item.id, item.name];
                });
                const banksMap = new Map(banksIdNameArray);
                newProps = {banksMap};
            }

            return (
                <WrapedComponent {...this.props} {...newProps}/>
            );
        }

    }

    return AsyncComponent;
}
export default withBanks;