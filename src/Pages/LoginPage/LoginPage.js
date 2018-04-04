import React from 'react';
import { connect } from 'react-redux';
import main from 'main.scss'
import { userActions } from 'actions/index';
import { history } from 'helpers/index';


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


    handleSubmit = async(e) => {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            await dispatch(userActions.login(username, password));
            history.push('/');
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
                <div className={main.login__content}>
                    <div className={main.alert__info} >
                        Username: name<br />
                        Password: pass
                    </div>
                    <h2>Login</h2>
                    <form name="login-content_form" onSubmit={this.handleSubmit}>

                        <div className={main.login_content_form__form_group_login}>
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username"
                                   value={username} onChange={this.handleChange} />
                            {submitted && !username &&
                            <label>Username is required</label>
                            }
                        </div>
                        <div className={main.login_content_form__form_group_password}>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"
                                   value={password} onChange={this.handleChange} />
                            {submitted && !password &&
                            <label>Password is required</label>
                            }
                        </div>

                        <div className={main.login_content_form__form_group_button}>
                            <button>Login</button>
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
