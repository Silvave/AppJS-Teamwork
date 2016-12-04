import React, {Component} from 'react';
import User from './User';
import {loadUsers} from '../../models/user';
//This will be controller-view component

export default class UsersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: []
        };
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        this.addUser = this.addUser.bind(this);
    }
    componentDidMount(){
        loadUsers(this.onLoadSuccess);
    }
    onLoadSuccess(response){
        this.setState({teams: response});
    }
    addUser(){
        console.log('add');
    }
    render() {
        return (
            <div>
                <h1>Users Page</h1>
                {this.state.teams.map((el,i) =>{
                    //console.log(el);
                    return <User key={i}
                                 username={el.username}
                                 addUser ={this.addUser}
                    />
                })}
            </div>
        )
    }
}
