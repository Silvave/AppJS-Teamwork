import React, {Component} from 'react';

export default  class DeleteForm extends Component {
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
                        disabled
                    />
                </div>
                <div className="form-group">
                    <label>
                        Time
                    </label>
                    <textarea
                        //the submition of this form will send data to the handler with these props
                        className="form-control"
                        type="time"
                        name="time"
                        value={this.props.time}
                        onChange={this.props.onChange}
                        disabled
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
                        disabled
                    />
                </div>
                <input
                    type="submit"
                    value="Delete Meeting"
                    className="btn btn-default"
                    />
                <input
                    type="submit"
                    value="Cancel"
                    className="btn btn-default"
                    onClick={this.props.redirect}/>
            </form>
        )
    }
}