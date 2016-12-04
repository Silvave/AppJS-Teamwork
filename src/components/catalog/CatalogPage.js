import React, {Component} from 'react';
import Team from './Team';
import {loadTeams} from '../../models/team';
//This will be controller-view component

export default class CatalogPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: []
        };
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }
    componentDidMount(){
        loadTeams(this.onLoadSuccess);
    }
    onLoadSuccess(response){
        this.setState({teams: response});
    }

    render() {
        return (
            <div>
                <h1>Catalog Page</h1>
                {this.state.teams.map((el,i) =>{
                    return <Team key={i}
                                 name={el.name}
                                 description={el.description}
                                 teamId={el._id}
                                 creator={el._acl.creator}
                                 beginning={el.beginning}
                                 deadline={el.deadline}
                    />
                })}
            </div>
        )
    }
}
