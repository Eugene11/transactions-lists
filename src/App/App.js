import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { PrivateRoute, WithoutAuthRoute } from 'components/index';
import { history } from 'helpers/index';
import { LoginPage } from 'Pages/LoginPage/LoginPage';
import { AddTransactionPage } from 'Pages/AddTransactionPage/AddTransactionPage';
import { TransactionsPage } from 'Pages/TransactionsPage/TransactionsPage';
import withAuthCheck from 'decorators/withAuthCheck';

@withAuthCheck
class App extends Component {

    render() {

        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <div>
                                <WithoutAuthRoute exact path="/login" component={LoginPage}
                                                  noAuth={true} loggedIn={this.props.loggedIn}/>
                                <PrivateRoute exact path="/" component={AddTransactionPage} loggedIn={this.props.loggedIn}/>
                                <PrivateRoute path="/transactions" component={TransactionsPage} loggedIn={this.props.loggedIn}/>
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );

  }
}

function mapStateToProps(state) {
    const { loggedIn } = state.authentication;
    return {
        loggedIn
    };
}
export default connect(mapStateToProps)(App);
