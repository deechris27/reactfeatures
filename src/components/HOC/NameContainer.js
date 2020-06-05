import React, { Component } from 'react'
import NameExists from './NameExists';

class NameContainer extends Component {
    
    render() {
        const names = ["deepak", "mytidbit", "moana", "naruto"];
        return (
            <div>
                <NameExists names={names} />
            </div>
        )
    }
};

export default NameContainer;
