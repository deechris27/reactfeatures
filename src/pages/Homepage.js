import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Homepage extends Component {
  
    render() {
        return (
            <div style={{textAlign:"center", lineHeight:"1.9"}}>
                <h1>Mytidbit React Concepts</h1>
                <Link to="/names">HOC Example 1</Link><br />
                <Link to="/timer">HOC Example 2</Link><br />
                <Link to="/login">Access restriction through HOC</Link><br />
                <Link to="/button">Button</Link><br />
                <Link to="/example">Error Boundary</Link><br />
                <Link to="/portal">Portal Example</Link><br />
            </div>
        )
    }
}
