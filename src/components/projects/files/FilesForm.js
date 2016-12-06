import React, {Component} from 'react';
import './Files.css';
// import {Link} from 'react-router';


export default class File extends Component {
    render() {
        return (
            <div className="col-sm-4">
                <div className="card card-block justified">
                    <p className="card-text">File name</p>
                    <h4 className="card-title">{this.props.name}</h4>
                    <p className="card-text">Type</p>
                    <h4 className="card-title">{this.props.type}</h4>
                    <hr/>
                    <a href={this.props.downloadLink} className="btn btn-primary">Download</a>
                    <hr/>
                    <input
                        type="button"
                        value="Delete"
                        className="btn btn-primary"
                        onClick={this.props.deleteFile(this.props.fileId)}/>
                </div>
            </div>
        )
    }
}