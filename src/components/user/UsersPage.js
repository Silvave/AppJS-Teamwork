import React, {Component} from 'react';
import User from './User';
import {loadUsers, getUserById, updateUser} from '../../models/user';
import toastr from 'toastr';
//This will be controller-view component

export default class UsersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
        this.onLoadSuccess = this.onLoadSuccess.bind(this);

        this.addUser = this.addUser.bind(this);
        /*this.deselectUser = this.deselectUser.bind(this);*/
        this.reloadUsersPage = this.reloadUsersPage.bind(this);
        this.reloadProjectsPage = this.reloadProjectsPage.bind(this);
    }

    componentDidMount() {
        loadUsers(this.onLoadSuccess);
    }

    onLoadSuccess(response) {
        let responseArr = [];
        let teamId = this.context.router.params.teamId;
        let userId = sessionStorage.getItem('userId');
        for (var i = 0; i < response.length; i++) {
            let user = response[i];
            if (!user['member-of'].includes(teamId)
                && user._id !== userId) {
                responseArr.push(user);
            }
            this.setState({users: responseArr});
        }
    }

    addUser(userId) {
        getUserById(userId, updateUsersProjects.bind(this));
        let teamId = this.context.router.params.teamId;

        function updateUsersProjects(user) {
            let arr = [];
            if (user['member-of'] !== undefined) {
                arr = user['member-of'];
            }
            arr.push(teamId);
            let data = {
                username: user.username,
                'member-of': arr
            };
            toastr.remove();
            toastr.success(`${user.username} successfully added to this team`, {timeOut: 4000});
            updateUser(user._id, data, this.reloadUsersPage);
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
                <h1>Add users to your team</h1>
                {this.state.users.map((el, i) => {
                    return <User key={i}
                                 username={el.username}
                                 userId={el._id}
                                 addUser={this.addUser}
                        //deselectUser={this.deselectUser}
                    />
                })}
                <input
                    type="button"
                    value="Back to projects"
                    onClick={this.reloadProjectsPage}
                />
            </div>
        )
    }
}

UsersPage.contextTypes = {
    router: React.PropTypes.object
};
