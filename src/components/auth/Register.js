import React from 'react'
import { connect } from 'react-redux'
import * as action from '../../actions/auth'
import { history } from "../../history"

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {},
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
        this.props.dispatch(action.createUser(this.state.formData)).then((res) => {
            if (!res.data) {
                <h3>Register Not Successfully</h3>
            } else {
                <h3>Register Successfully</h3>
                setTimeout(() => {
                    history.push("/login");
                }, 3000);
            }
        }).catch((error) => {
            <h3>Register Not Successfully</h3>
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    this.handleFormSubmit();
                }}>
                    <label>First Name</label>
                    <input type="text"
                        placeholder="First Name"
                        name="firstName"
                        onChange={this.handleInput}
                    />
                    <br />
                    <label>Last Name</label>
                    <input type="text"
                        placeholder="Last Name"
                        name="lastName"
                        onChange={this.handleInput}
                    />
                    <br />
                    <label>Email</label>
                    <input type="email"
                        required
                        placeholder="Email"
                        name="email"
                        onChange={this.handleInput}
                    />
                    <br />
                    <label>Password</label>
                    <input type="password"
                        required
                        placeholder="Enter Password"
                        name="password"
                        onChange={this.handleInput}
                    />
                    <br />
                    <label>Number</label>
                    <input type="text"
                        placeholder="Enter Number"
                        name="number"
                        onChange={this.handleInput}
                    />
                    <br />
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        //Once data are store in dispatch variable so whenever use it variable to call like this in below:
    };
};

export default connect(mapStateToProps)(Register)