import React from 'react';
import { connect } from 'react-redux';

import { userActions } from 'actions/index';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
        const { alert } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div>
                {alert.message &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
                <div className="login-content">
                    <div className="alert-info">
                        Username: name<br />
                        Password: pass
                    </div>
                    <h2>Login</h2>
                    <form name="login-content_form" onSubmit={this.handleSubmit}>

                        <div className="login-content_form_form-group-login">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" name="username"
                                   value={username} onChange={this.handleChange} />
                            {submitted && !username &&
                            <label className="help-block">Username is required</label>
                            }
                        </div>
                        <div className="login-content_form_form-group-password">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password"
                                   value={password} onChange={this.handleChange} />
                            {submitted && !password &&
                            <label className="help-block">Password is required</label>
                            }
                        </div>

                        <div className="login-content_form_form-group-button">
                            <button className="btn btn-primary">Login</button>
                        </div>

                    </form>
                </div>
            </div>


        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };
