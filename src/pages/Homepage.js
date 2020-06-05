import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Homepage extends Component {
  
    render() {
        return (
            <div style={{textAlign:"center", lineHeight:"1.9"}}>
                <h1>Mytidbit React Concepts</h1>
                <Link to="/names">HOC Example 1</Link>
            </div>
        )
    }
}
