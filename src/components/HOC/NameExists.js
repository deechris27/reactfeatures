import React, { Component } from 'react';
import HigherOrder from './HigherOrder';
import HigherOrder1 from './HigherOrder1';

class NameExists extends Component {

    render() {
        return (
            <React.Fragment>
                <h1>One HOC for null check and another to convert the props to uppercase</h1>
                <div>
                    <ul>{this.props.names.map(name => {
                        return <li key={name}>{name}</li>
                    })}</ul>
                </div>
            </React.Fragment>
        )
    }
}

export default HigherOrder1(HigherOrder(NameExists));
