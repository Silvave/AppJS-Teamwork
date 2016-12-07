import React, {Component} from 'react';
import File from './FilesForm';
import {deleteFile, loadFiles, uploadFile} from '../../../models/files';
import $ from 'jquery';
import toastr from 'toastr';

export default class FilesPage extends Component {
    constructor(props) {
        //Get props from the parent
        super(props);
        //Set default state
        this.state = {
            files: [],
            teamId: (this.props.location.pathname).split("/")[2]
        };
        //Bind functions with parent class
        this.onDeleteFile = this.onDeleteFile.bind(this);
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        this.redirectToProjects = this.redirectToProjects.bind(this);
        this.onUploadFile = this.onUploadFile.bind(this);
        this.uploadSuccess = this.uploadSuccess.bind(this);
        this.deleteSuccess = this.deleteSuccess.bind(this);
    }

    componentDidMount() {
        loadFiles(this.state.teamId, this.onLoadSuccess);
    }

    onLoadSuccess(response) {
        toastr.success('Files loaded.');
        this.setState({files: response});
    }

    onUploadFile() {
        let file = $('#upload-file')[0].files[0];
        $('#upload-file').val("");
        if (file === undefined) {
            return toastr.error("No file chosen. You have to choose a file!");
        }

        let metadata = {
            "_filename": file.name,
            "size": file.size,
            "mimeType": file.type,
            "teamId": this.state.teamId
        };

        uploadFile(metadata, file, this.uploadSuccess)
    }

    uploadSuccess() {
        toastr.success('File was successfully uploaded.');
        this.componentDidMount();
    }

    onDeleteFile(id) {
        deleteFile(id, this.deleteSuccess)
    }

    deleteSuccess() {
        toastr.success('File was successfully deleted.');
        this.componentDidMount();
    }

    //Redirect without ajax call with back button
    redirectToProjects() {
        this.context.router.goBack();
    }

    render() {
        let content = <h3 className="text-muted">There are no uploaded files.</h3>;

        if (this.state.files.length > 0) {
            content = this.state.files.map((el, i) => {
                return <File key={i}
                             name={el._filename}
                             type={el.mimeType}
                             downloadLink={el._downloadURL}
                             delFile={() => this.onDeleteFile(el._id)}
                        />
            })
        }
        return (
            <div>
                <h1>Files</h1>
                {content}
                <div id="file-buttons">
                    <input
                        type="file"
                        id="upload-file"
                    />
                    <input
                        type="button"
                        value="Add new file"
                        onClick={this.onUploadFile}
                    />
                    <input
                        type="button"
                        value="Back to projects"
                        onClick={this.redirectToProjects}
                    />
                </div>
            </div>
        )
    }
}

//Redirect through the Router - the Router is visible for the class
FilesPage.contextTypes = {
    router: React.PropTypes.object
};