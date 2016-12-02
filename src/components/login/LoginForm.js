import React, {Component} from 'react';

export default  class LoginForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <label>
                    Username
                </label>
                <input className="form-control"
                       type="text"
                       name="username"
                       value={this.props.username}//Here we take the values with 'props', because they come from the parent
                       onChange={this.props.onChange}//Here we take the values with 'props', because they come from the parent - see ...Page
                       disabled={this.props.inputDisabled}
                />
                <label>
                    Password
                </label>
                <input
                    className="form-control"
                    type="password"
                    name="password"
                    value={this.props.password}
                    onChange={this.props.onChange}
                    disabled={this.props.inputDisabled}
                />
                <input 
                    type="submit" 
                    value="Login"
                    className="btn btn-default"
                    disabled={this.props.inputDisabled}
                />
            </form>
        )
    }
}