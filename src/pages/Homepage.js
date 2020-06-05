import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Spinner from '../components/Spinner';

export default class Homepage extends Component {
  
    render() {
        return (
            <div style={{textAlign:"center", lineHeight:"1.9"}}>
                <h1>Mytidbit React Concepts</h1>
                <Spinner spin={true} />
            </div>
        )
    }
}
