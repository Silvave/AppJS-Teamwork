import React, {Component} from 'react';
import User from './User';
import {loadUsers} from '../../models/user';
//This will be controller-view component

import observer from '../../models/observer'//added

export default class UsersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
        this.usersToAdd = [];
        this.onLoadSuccess = this.onLoadSuccess.bind(this);

        this.addUser = this.addUser.bind(this);

    }

    componentDidMount(){
        loadUsers(this.onLoadSuccess);
    }

    onLoadSuccess(response){
        //observer.sendProjectId();//take projectId through the observer
        this.setState({users: response});
    }

    addUser(userId){
        //console.log(userId);
        //observer.sendProjectId();
        console.log()
    }

    render() {
        return (
            <div>
                <h1>Users Page</h1>
                {this.state.users.map((el,i) =>{
                    return <User key={i}
                                 username={el.username}
                                 userId={el._id}
                                 addUser={this.addUser}
                    />
                })}
            </div>
        )
    }
}
