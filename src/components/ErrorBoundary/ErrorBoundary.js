import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        timerId: "",
        errorMessage: "Something went wrong buddy...So Sad..Page will refresh in 3 seconds"
    };

    static getDerivedStateFromError(error){
        return {hasError : true}
    }

    logError = console.error;

    componentDidCatch(error, info){
         this.logError("Deepak.....", error.toString(), info.componentStack)

         this.state.timerId = setTimeout(()=>{
            this.props.history.go(0)
         }, 3000) 
    }

    componentWillUnmount(){
        clearTimeout(this.state.timerId)
    }

    
    render() {
        if(this.state.hasError){
            return (
                <div>
                    {this.state.errorMessage}
                </div>
            )
        }
      return this.props.children
    }
}

export default withRouter(ErrorBoundary);
