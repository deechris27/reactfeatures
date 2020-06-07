import React, { Component } from 'react'
import Button from './Button';

export default class ButtonContainer extends Component {
    render() {
        return (
            <div style={{position:'relative', top:'250px', left:'30%'}}>
                <h1>Alert Message by HOC</h1>
                <Button name={"Click Me"} msg={"Mytidbit.."}/>
            </div>
        )
    }
}
