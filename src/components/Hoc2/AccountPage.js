import React, { Component } from 'react';
import requireLogin from './requireLogin';

class AccountPage extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h1>You're in account page...</h1>
            </div>
        )
    }
}

export default requireLogin(AccountPage);
