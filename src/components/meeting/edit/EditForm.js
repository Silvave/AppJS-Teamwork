import React, {Component} from 'react';

export default  class EditForm extends Component {
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
                        type="time"
                        name="time"
                        value={this.props.time}
                        onChange={this.props.onChange}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Date
                    </label>
                    <input
                        //the submition of this form will send data to the handler with these props
                        className="form-control"
                        type="date"
                        name="date"
                        value={this.props.date}
                        onChange={this.props.onChange}
                    />
                </div>
                <input
                    type="submit"
                    value="Edit Meeting"
                    className="btn btn-default"
                    disabled={this.props.inputDisabled}/>
                <input
                    type="submit"
                    value="Cancel"
                    className="btn btn-default"
                    onClick={this.props.redirect}/>
            </form>
        )
    }
}