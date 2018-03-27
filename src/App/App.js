import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { connect } from 'react-redux';
import 'Custom.css';
import { PrivateRoute, PublicRoute, Loading } from 'components/index';
import { history } from 'helpers/index';
import { userActions } from 'actions/index';
import { LoginPage } from 'Pages/LoginPage/LoginPage';
import { AddTransactionPage } from 'Pages/AddTransactionPage/AddTransactionPage';
import { TransactionsPage } from 'Pages/TransactionsPage/TransactionsPage';
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {loading: true};
    }

    componentDidMount() {
        this.props.dispatch(userActions.checkLogin());
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.loggedIn !== this.props.loggedIn) {
            this.setState({loading: false});
        }
    }

    render() {

        if (this.state.loading) {
            return (
                <Loading></Loading>
            );
        }
        else {
          return (
              <div className="jumbotron">
                  <div className="container">
                      <div className="col-sm-8 col-sm-offset-2">
                          {alert.message &&
                          <div className={`alert ${alert.type}`}>{alert.message}</div>
                          }
                          <Router history={history}>
                              <div>
                                  <PublicRoute exact path="/login" component={LoginPage}
                                                loggedIn={this.props.loggedIn}/>
                                  <PrivateRoute exact path="/" component={AddTransactionPage}
                                                loggedIn={this.props.loggedIn}/>
                                  <PrivateRoute path="/transactions" component={TransactionsPage}
                                                loggedIn={this.props.loggedIn}/>
                              </div>
                          </Router>
                      </div>
                  </div>
              </div>
          );
        }
  }
}

function mapStateToProps(state) {
    const { loggedIn } = state.authentication;
    return {
        loggedIn
    };
}
export default connect(mapStateToProps)(App);
