import React, {Component} from 'react';

export default  class CreateForm extends Component {
    render() {
        return (
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
                        Beginning
                    </label>
                    <input
                        //the submition of this form will send data to the handler with these props
                        className="form-control"
                        type="date"
                        name="startDate"
                        value={this.props.startDate}
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
                        name="endDate"
                        value={this.props.endDate}
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
        )
    }
}