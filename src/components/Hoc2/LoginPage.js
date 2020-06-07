import React, { Component } from 'react'

export default class LoginPage extends Component {

    constructor(props){
        super(props)

        this.state = {
            currentUser : "",
            currentlyLoggedIn: false
        };
    }

  

    buttonStyle = {
        login: {
            backgroundColor: 'dodgerblue',
            borderRadius: "10%",
            width: "200px",
            height: "50px",
            cursor: "pointer"
        },
        logout: {
            backgroundColor: 'orange',
            borderRadius: "10%",
            width: "200px",
            height: "50px",
            cursor: "pointer"
        }
    };

    login = () => {
        this.setState({currentUser: "Deepak Mytidbit", currentlyLoggedIn: true})
        this.props.history.push("/dash")
    };
      
    logout = () => {
        this.setState({currentUser: null, currentlyLoggedIn: false})
    };

    renderButton(){
        if(!this.state.currentlyLoggedIn){
            return(
                <button style={this.buttonStyle.login} onClick={this.login}> Login</button>
            )
        }else{
            return (
                <button style={this.buttonStyle.logout} onClick={this.logout}> Logout</button>
            )
        }
    }

    render() {
        return (
            <div style={{textAlign: "center", position:"relative", top: "250px"}}>
                <h1>Access restriction HOC - Needs fix</h1>
               {this.renderButton()}
            </div>
         )
    };
}

