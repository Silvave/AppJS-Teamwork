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
        this.setState({users: response});
    }

    addUser(userId){
        let teamId = this.context.router.params.teamId;
        
        
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
UsersPage.contextTypes = {
    router: React.PropTypes.object
};
