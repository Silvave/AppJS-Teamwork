import React, {Component} from 'react';
import RemoveUser from './RemoveUser';
import {loadUsers, getUserById, updateUser,removeUserFromTeam,loadUsersInTeam} from '../../../models/user';
import toastr from 'toastr';
//This will be controller-view component

export default class RemoveUserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
        this.onLoadSuccess = this.onLoadSuccess.bind(this);

        this.removeUser = this.removeUser.bind(this);
        /*this.deselectUser = this.deselectUser.bind(this);*/
        this.reloadUsersPage = this.reloadUsersPage.bind(this);
        this.reloadProjectsPage = this.reloadProjectsPage.bind(this);
        this.onRemoveSuccess = this.onRemoveSuccess.bind(this);
    }

    componentDidMount() {
        loadUsersInTeam(this.props.params.teamId,this.onLoadSuccess);
    }

    onLoadSuccess(response) {
        this.setState({users: response});
    }

    removeUser(userId) {
        let teamId = this.context.router.params.teamId;
        removeUserFromTeam(userId, teamId, this.onRemoveSuccess);
        
    }

    onRemoveSuccess(response) {
        toastr.info('User successfully removed');
        loadUsersInTeam(this.props.params.teamId,this.onLoadSuccess);
    }

    reloadUsersPage() {
        loadUsers(this.onLoadSuccess);
    }

    reloadProjectsPage(){
        this.context.router.goBack()
    }

    //deselectUser(userId){
    //   for(let id in this.usersArr){
    //       if(userId === this.usersArr[id]){
    //          this.usersArr.splice(id,1);
    //      }
    //  }
    // }

    render() {
        return (
            <div>
                <h1>Remove Users from Team</h1>
                {this.state.users.map((el, i) => {
                    return <RemoveUser key={i}
                                 username={el.username}
                                 userId={el._id}
                                 removeUserFromTeam={this.removeUser}/>
                })}
                <input
                type="button"
                onClick={this.reloadProjectsPage}   
                value="Back to projects"
                />
            </div>
        )
    }
}

RemoveUserPage.contextTypes = {
    router: React.PropTypes.object
};
