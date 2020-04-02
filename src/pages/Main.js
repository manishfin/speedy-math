import React, { Component } from 'react';
import { Button, Layout, Divider } from 'antd';

import Model from '../components/Model';
import Question from '../components/Question';

import '../assets/styles/Main.css';

const { Header, Content } = Layout;

const MAX_TIME = 5;

class Main extends Component {
    constructor() {
        super();
        this.state = this.getInitialState();
    }

    getInitialState() {
        this.setTimer();
        return {
            totalScore: 0,
            totalTime: 0,
            isGameOver: false,
            countdown: MAX_TIME,
        }
    }

    setTimer() {
        this.timer = setInterval(() => this.tick(), 1000);
    }

    clearTimer() {
        clearInterval(this.timer);
    }

    getTotalTime() {
        return this.state.totalTime + (MAX_TIME - this.state.countdown);
    }

    tick() {
        if (this.state.countdown === 0) {
            this.clearTimer();
            this.setState({
                totalTime: this.getTotalTime(),
                isGameOver: true,
            });
        } else {
            this.setState({ countdown: this.state.countdown - 1 })
        }
    }

    resetState = () => {
        this.setState(this.getInitialState());
    }

    verifyAnswer = (answer, userResponse) => {
        if (userResponse === answer) {
            this.setState({ totalScore: this.state.totalScore + 1 });
        }
        else {
            this.clearTimer();
            this.setState({ isGameOver: true });
        }

        this.setState({
            totalTime: this.getTotalTime(),
            countdown: MAX_TIME,
        })
    }

    render() {
        console.log('####render');
        return (
            <div>
                {
                    this.state.isGameOver ?
                    (
                        <Model visible={this.state.isGameOver} totalScore={this.state.totalScore} totalTime={this.state.totalTime} callBack={this.resetState} />
                    ) :
                    (
                        <Layout className="layout">
                            <Header className="header">
                                <div>
                                    <span className="info-text">Score: </span>
                                    <Button type="primary" shape="circle">{this.state.totalScore}</Button>
                                    <Divider type="vertical" />
                                    <span className="info-text">Total Time: </span>
                                    <Button type="primary" shape="circle">{this.state.totalTime}</Button>
                                    <Divider type="vertical" />
                                    <span className="info-text">Timer: </span>
                                    <Button type="primary" shape="circle" danger>{this.state.countdown}</Button>
                                </div>
                            </Header>
                            <Content className="content">
                                <div>
                                    <Question verifyAnswer={this.verifyAnswer}/>
                                </div>
                            </Content>
                        </Layout>
                    )
                }
            </div>
        );
    }
}

export default Main;