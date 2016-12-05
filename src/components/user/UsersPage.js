import React, {Component} from 'react';
import User from './User';
import {loadUsers, getUserById, updateUser} from '../../models/user';
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
            this.setState({users: responseArr})
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
            updateUser(user._id, data, this.reloadUsersPage);
        }
    }

    reloadUsersPage() {
        alert('Are you sure you want to add this user to this team');
        loadUsers(this.onLoadSuccess);
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
                <h1>Users Page</h1>
                {this.state.users.map((el, i) => {
                    return <User key={i}
                                 username={el.username}
                                 userId={el._id}
                                 addUser={this.addUser}
                        //deselectUser={this.deselectUser}
                    />
                })}
            </div>
        )
    }
}

UsersPage.contextTypes = {
    router: React.PropTypes.object
};
