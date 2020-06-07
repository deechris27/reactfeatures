import React, { Component } from 'react'
import alertHoc from './alertHoc'

class Button extends Component {
    constructor(props){
        super(props)
    }

    
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.props.handleClick.bind(this, this.props.msg)}>{this.props.name}</button>
            </div>
        )
    }
}

export default alertHoc(Button)
