import React, { Component } from 'react'

const HigherOrder1 = (WrappedComponent) => {
    return class extends Component {

        state = {
            names: this.props.names
        };


        componentDidMount() {
            if (this.state.names.length) {
                const newNames = this.state.names.map(name => {
                    return name.toUpperCase();
                });

                this.setState(prevState => ({
                    ...prevState,
                    names: newNames
                }))
            }
        }

        render() {
            return <WrappedComponent {...this.state} />
        }
    }
};

export default HigherOrder1;
