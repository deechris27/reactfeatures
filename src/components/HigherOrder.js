import React, { Component } from 'react'
import PropTypes from 'prop-types'

const HigherOrder = (WrappedComponent) => {
    return class extends React.Component {
        constructor(props){
            super(props);
            this.state = {

            }
        }

        render(){
            return(
                <WrappedComponent />
            )
        }
    }
}
