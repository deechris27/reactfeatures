import React, { Component } from 'react'

const HigherOrder = (WrappedComponent) => {
    return class extends Component {
      
        render(){
            //console.log(this.props);
            if(this.props.names.length){
                return <WrappedComponent {...this.props}/>
            }else{
                return <h2>No names Macha...</h2>
            }
        }
    }
}

export default HigherOrder;
