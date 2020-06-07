import React, { Component } from 'react'
import Modal from './Modal';
import PromptModal from './PromptModal';

export default class PortalExample extends Component {

    state={
        showModal: true
    }

    toggleModal = () => {
        console.log("thunki...")
        this.setState({showModal: !this.state.showModal})
    };


    render() {
        return (
            <div>
                {this.state.showModal ?
                (<Modal>
                    <PromptModal toggleModal={this.toggleModal}/>
                </Modal>) : 
                  <div>
                    <h2>Now you are in root element</h2>
                    <button onClick={this.toggleModal}>Show Modal</button>
                 </div>
                 }
            </div>
        )
    }
}
