import React, { Component } from 'react';

import '../assets/styles/Welcome.css';

class Welcome extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <h1>Welcome to speedy math</h1>
                </div>
                <div style={{margin: 50}}>
                    <a className="play-button" href='/start'>Let's Play</a>
                </div>
            </div>
        );
    }
}

export default Welcome;