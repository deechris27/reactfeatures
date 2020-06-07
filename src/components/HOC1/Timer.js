import React, { Component } from 'react'
import { Hoc } from './Hoc';

class Timer extends Component {
    render() {
        const Time = ({ label }) => {
            const now = new Date();
            const hours = (now.getHours() % 12) || 12;
            const mins = now.getMinutes();
            const secs = now.getSeconds();
            return (
                <div>
                    <b>{label && `${label}: `}</b>
                    {(hours < 10 ? '0' : '') + hours}:
                    { (mins < 10 ? '0' : '') + mins}:
                    { (secs < 10 ? '0' : '') + secs}
                    {hours < 12 ? ' PM' : ' AM'}
                </div>
            )

        }
        return (
            <div style={{textAlign:"center", position:"relative",top:'250px'}}>
                <h2>Time ticks handled in HOC</h2>
                <Time label={"Mytidbit Time"} />
            </div>
        )
    }
}

export default Hoc(1000)(Timer);
