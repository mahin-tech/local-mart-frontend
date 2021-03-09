import React from 'react'
import { loginWithJWT } from '../../actions/auth'
import { connect } from 'react-redux'
import { history } from '../../history'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {},
            userInfo: this.props.userInfo,
        };
    }

    //handleInput
    handleInput = (event) => {
        event.persist();
        this.setState((prevState) => ({
            formData: {
                ...prevState.formData,
                [event.target.name]: event.target.value,
            },
        }));
    };

    //Handle Form Submit
    handleFormSubmit = () => {
        this.props.dispatch(loginWithJWT(this.state.formData));
    };

    render() {
        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    this.handleFormSubmit();
                }}>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={this.handleInput}
                    />
                    <br />
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={this.handleInput}
                    />
                    <br />
                    <button type="submit">
                        Login
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = () => {
    //
};

export default connect(mapStateToProps)(Login)