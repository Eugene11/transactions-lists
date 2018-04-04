import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from 'actions/index';

function mapStateToProps(state) {
    const { loggedIn } = state.authentication;
    return {
        loggedIn
    };
}

const withAuthCheck = (WrapedComponent) => {
    @connect(mapStateToProps)
    class AsyncComponent extends Component {

        constructor(props) {
            super(props);
            this.state = {}
        }

        componentWillMount = async () => {
            await this.props.dispatch(userActions.checkLogin());
        }

        render() {

            if (this.props.loggedIn === undefined)
               return null;
            return (
                <WrapedComponent {...this.props} />
            );
        }
    }
    return AsyncComponent;
}
export default withAuthCheck;
