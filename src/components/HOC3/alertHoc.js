import React, { Component } from 'react'

const alertHoc = WrappedComponent => {
    return class extends Component {
        constructor(props){
            super(props);
        }

        handleClick(msg){
            alert(msg)
        }

        render(){
            return(
                <WrappedComponent handleClick={this.handleClick} {...this.props}/>
            )
        }
    }
}

export default alertHoc;

