import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default  class RegisterForm extends Component {
    render() {
        return (
            <ReactCSSTransitionGroup transitionName="example" transitionAppear={true}>
        <div id="registerForm">
            <ReactCSSTransitionGroup transitionName="text" transitionAppear={true}>
            <h3>Please register</h3>
            </ReactCSSTransitionGroup>
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
                <label>
                    Confirm Password
                </label>
                <input
                    //the submition of this form will send data to the handler with these props
                    className="form-control"
                    type="password"
                    name="repeat"
                    value={this.props.repeat}
                    onChange={this.props.onChange}
                    disabled={this.props.inputDisabled}
                />
                <input
                    type="submit"
                    value="Register"
                    className="btn btn-default"
                    disabled={this.props.inputDisabled}/>
            </form>
        </div>
            </ReactCSSTransitionGroup>
        )
    }
}