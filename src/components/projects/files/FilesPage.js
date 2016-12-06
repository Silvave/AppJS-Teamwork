import React, {Component} from 'react';
import File from './FilesForm';
import {deleteFile, loadFiles} from '../../../models/files';
import toastr from 'toastr';

export default class FilesPage extends Component {
    constructor(props) {
        //Get props from the parent
        super(props);
        //Set default state
        this.state = {
            files: []
        };
        //Bind functions with parent class
        // this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onLoadFilesSuccess = this.onLoadFilesSuccess.bind(this);
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        this.redirectToProjects = this.redirectToProjects.bind(this);
        // this.loadFiles = this.loadFiles.bind(this);
    }

    componentDidMount() {
        loadFiles(this.props.params.teamId, this.onLoadSuccess);
    }

    onLoadSuccess(response) {
        toastr.success('Files loaded.');
        this.setState({teams: response});
        console.log(this.state.files)
    }

    // //OnSubmit Event for the form - returns the data from the form
    // onSubmitHandler(ev) {
    //     //Prevent refreshing the page
    //     ev.preventDefault();
    //
    //     deleteTeam(this.props.params.teamId,this.onDeleteSuccess)
    // }

    //the callback for the promise
    // onLoadFilesSuccess(response) {
    //     if (response) {
    //         toastr.success('Files loaded.');
    //         this.setState({teams: response});
    //     }
    //     else {
    //         toastr.error('Error occurred when trying to load files');
    //         this.context.router.push('/projects');
    //     }
    //
    // }

    //Redirect without ajax call with back button
    redirectToProjects(ev) {
        this.context.router.push('/projects');
    }

    render() {
        let content = <h3 className="text-muted">There are no files.</h3>;

        if (this.state.files.length > 0) {
            content = this.state.files.map((el, i) => {
                return <File key={i}
                             fileId={el._Id}
                             name={el.name}
                             type={el.type}
                             downloadLink={el.downloadLink}
                             />
            })
        }
        return (
            <div>
                <h1>Files</h1>
                {content}
            </div>
        )
    }
}

//Redirect through the Router - the Router is visible for the class
FilesPage.contextTypes = {
    router: React.PropTypes.object
};