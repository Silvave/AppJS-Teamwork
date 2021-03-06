import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class CreateForm extends Component {
    render() {
        return (
            <ReactCSSTransitionGroup transitionName="example" transitionAppear={true}>
                <div id="createTeamForm">
                    <h3>Create New Team</h3>
                    <form onSubmit={this.props.onSubmit}>
                        <div className="form-group">
                            <label>
                                Name
                            </label>
                            <input
                                //the submition of this form will send data to the handler with these props
                                className="form-control"
                                type="text"
                                name="name"
                                value={this.props.name}
                                onChange={this.props.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                Description
                            </label>
                            <textarea
                                //the submition of this form will send data to the handler with these props
                                className="form-control"
                                type="text"
                                name="description"
                                value={this.props.description}
                                onChange={this.props.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                Start Date
                            </label>
                            <input
                                //the submition of this form will send data to the handler with these props
                                className="form-control"
                                type="date"
                                name="beginning"
                                value={this.props.beginning}
                                onChange={this.props.onChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                Deadline
                            </label>
                            <input
                                //the submition of this form will send data to the handler with these props
                                className="form-control"
                                type="date"
                                name="deadline"
                                value={this.props.deadline}
                                onChange={this.props.onChange}
                                required
                            />
                        </div>
                        <input
                            type="submit"
                            value="Create Team"
                            className="btn btn-default"
                            disabled={this.props.inputDisabled}/>
                    </form>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}