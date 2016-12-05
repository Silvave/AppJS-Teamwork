import React, {Component} from 'react';

export default  class CreateForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <div className="form-group">
                    <label>
                        Topic
                    </label>
                    <input
                        //the submition of this form will send data to the handler with these props
                        className="form-control"
                        type="text"
                        name="topic"
                        value={this.props.topic}
                        onChange={this.props.onChange}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Time
                    </label>
                    <input
                        //the submition of this form will send data to the handler with these props
                        className="form-control"
                        type="date"
                        name="time"
                        value={this.props.time}
                        onChange={this.props.onChange}
                        required
                    />
                </div>
                <input
                    type="submit"
                    value="Create Meeting"
                    className="btn btn-default"
                    disabled={this.props.inputDisabled}/>
            </form>
        )
    }
}