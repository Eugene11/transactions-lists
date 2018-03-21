import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import '../Custom.css';
import { PrivateRoute } from '../components';
import { history } from '../helpers';
import { LoginPage } from '../Pages/LoginPage/LoginPage'
import { AddTransactionPage } from '../Pages/AddTransactionPage/AddTransactionPage'
import { TransactionsPage } from '../Pages/TransactionsPage/TransactionsPage'
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
                            <Route path="/login" component={LoginPage} />
                            <PrivateRoute exact path="/" component={AddTransactionPage} />
                            <PrivateRoute path="/transactions" component={TransactionsPage} />
                        </div>
                    </Router>
                </div>
            </div>
        </div>
      );
  }
}

export default connect()(App);
