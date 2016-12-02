import React, {Component} from 'react';

export default  class DeleteForm extends Component {
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
                        disabled
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
                        disabled
                    />
                </div>
                <input
                    type="submit"
                    value="Delete Team"
                    className="btn btn-default"
                    disabled={this.props.inputDisabled}/>
            </form>
        )
    }
}