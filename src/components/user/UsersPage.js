import React, {Component} from 'react';
import User from './User';
import {loadUsers, getUserById, pushUsersArrayToTheTeam, updateUser} from '../../models/user';
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
    }

    componentDidMount() {
        loadUsers(this.onLoadSuccess);
    }

    onLoadSuccess(response) {
        this.setState({users: response});

    }

    addUser(userId) {
        getUserById(userId, updateUsersProjects);
        let teamId = this.context.router.params.teamId;

        function updateUsersProjects(user) {
            let arr = [];

            if(user['member-of'] !== undefined){
                arr = user['member-of'];
            }
            arr.push(teamId);
            let data = {
                username: user.username,
                'member-of': arr
            };

            updateUser(user._id, data);


            //console.log(user._id);
            //console.log(arr);
        }
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
                <input type="button" value="Commit changes" onClick={() => this.props.addUsersToTeam()}/>
            </div>
        )
    }
}

UsersPage.contextTypes = {
    router: React.PropTypes.object
};
