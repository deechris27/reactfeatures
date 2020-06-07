import React, { Component } from 'react'

class ExampleComponent extends Component {

    state = {
        counter: 0
    };

    handleClick = () => {
         this.setState(prevState=>({
             ...prevState,
             counter: this.state.counter + 1
         }))
    };

    
    render() {
        if(this.state.counter === 3){
            throw "Error"
        }

        
        return (
            <div>
                <h1>Click..When the counter is 3, Error occurs and Error Boundary kicks in</h1>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleClick}>Increment</button><br />
            </div>
        )
    }
}

export default ExampleComponent;