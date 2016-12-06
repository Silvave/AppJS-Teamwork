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

        this.removeUserFromTeam = this.removeUserFromTeam.bind(this);
        /*this.deselectUser = this.deselectUser.bind(this);*/
        this.reloadUsersPage = this.reloadUsersPage.bind(this);
        this.reloadProjectsPage = this.reloadProjectsPage.bind(this);
    }

    componentDidMount() {
        loadUsersInTeam(this.props.params.teamId,this.onLoadSuccess);
    }

    onLoadSuccess(response) {
        this.setState({users: response});
    }

    removeUserFromTeam(userId) {
        removeUserFromTeam(userId,this.props.params.teamId, updateUsersProjects.bind(this));
        // let teamId = this.context.router.params.teamId;
        //
        function updateUsersProjects(user) {
            // let arr = [];
            // if (user['member-of'] !== undefined) {
            //     arr = user['member-of'];
            // }
            // arr.push(teamId);
            // let data = {
            //     username: user.username,
            //     'member-of': arr
            // };
            // toastr.success(`${user.username} successfully added to this team`);
            // updateUser(user._id, data, this.reloadUsersPage);
        }
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
                                 removeUserFromTeam={this.removeUserFromTeam}/>
                })}
            </div>
        )
    }
}

RemoveUserPage.contextTypes = {
    router: React.PropTypes.object
};
