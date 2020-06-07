import React from 'react'

export const Hoc = (interval) => (WrappedComponent) => {
    return class withInterval extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                ding : 0
            };

            this.intervaly = setInterval(this.dingy.bind(this), interval);
        }

        dingy(){
            this.setState(prevState => ({
                ...prevState,
                ding: this.state.ding + 1
            }))
        }

        componentWillUnmount(){
            clearInterval(this.intervaly)
        }

        render(){
            console.log("ding..", this.state)
            return(
                <WrappedComponent {...this.props}/>
            )
        }
    }
}
