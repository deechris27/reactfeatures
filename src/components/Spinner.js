import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

const rotate = keyframes`
   from{
       transform: rotate(0deg)
   }

   to{
       transform: rotate(360deg)
   }
`

export default class Spinner extends Component {

    constructor({ spin }) {
        super(spin);
        this.state = {
            isSpin: spin
        }
    }

    static propTypes = {
        spin: PropTypes.bool
    };

   render() {
     const Loader = styled("div")`
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 1;
        margin: 0;
        border: 10px solid lightgray;
        border-radius: 50%;
        border-top: 10px solid purple;
        width: 50px;
        height: 50px;
        display: ${this.state.isSpin ? "block" : "none"};
        animation: 0.75s ${rotate} linear infinite;
        `
        return (
            <Loader />
        )
    }
}
