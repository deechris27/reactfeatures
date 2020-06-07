import React, { Component } from 'react'

export default class PromptModal extends Component {

    constructor(props){
        super(props)
    }

      render() {

   return (
       <React.Fragment>
               <h1>This modal is rendered in id modal element</h1>
               <div style={{display:"inline-block", marginRight:"15px"}}>
                   <button onClick={this.props.toggleModal}>Yes</button>
                   <button onClick={this.props.toggleModal}>No</button>
               </div>
           </React.Fragment>
      )

    }
}
