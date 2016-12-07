import React, {Component} from 'react';
import './Files.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class File extends Component {
    render() {
        return (
            <ReactCSSTransitionGroup transitionName="example" transitionAppear={true}>
            <div >
                <form id="files">
                    <div id="filesHeading">
                        <p>File name:</p>
                        <h4>{this.props.name}</h4>
                    </div>
                    <p>Type</p>
                    <h4>{this.props.type}</h4>
                    <hr/>
                    <div id="btns-files">
                        <a
                            href={this.props.downloadLink}
                            download={""}
                            className="btn btn-primary">Download
                        </a>
                        <input
                            type="button"
                            value="Delete"
                            className="btn btn-primary"
                            onClick={this.props.delFile}
                        />
                    </div>
                </form>
            </div>
            </ReactCSSTransitionGroup>
        )
    }
}