import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import requireLogin from './requireLogin'

class DashBoard extends Component {
    render() {
        return (
            <div>
                <h1>Hello dood...</h1>
                <Link to="/account">Go to account page</Link>
            </div>
        )
    }
}

export default requireLogin(DashBoard);
