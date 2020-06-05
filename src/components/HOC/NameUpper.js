import React, { Component } from 'react'
import HigherOrder1 from './HigherOrder1';

class NameUpper extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <ul>
                    {this.props.names.map(name=>{
                        return <li>{name}</li>
                    })}
                </ul>
            </div>
        )
    }
};

export default HigherOrder1(NameUpper);
