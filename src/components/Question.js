import React, { Component } from 'react';
import { Button, Card } from 'antd';

import { generateQuestionAndAnswer, getRandomValue, round, generateRandomNumber } from '../utils/utils';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            questionSet: this.setQuestion(),
        }
    }

    setQuestion() {
        const queAndAnswer = generateQuestionAndAnswer();
        const options = this.generateOptions(queAndAnswer.answer);
        const shuffledOptions = this.getShuffledArray(options);

        return {
            ...queAndAnswer,
            shuffledOptions,
        }
    }

    generateOptions(answer) {
        let deviations = [-2, -1, -0.5, 0.5, 1, 2];
        const options = [answer];
        for(let i = 0; i < 3; i++) {
            const randomValue = getRandomValue(deviations);
            const option = round((answer + randomValue), 1)
            options.push(option);
            const index = deviations.indexOf(randomValue)
            deviations.splice(index, 1);
        }
    
        return options;
    }

    getShuffledArray(values) {
        for (let i = 0; i < values.length; i++) {
            const rand = generateRandomNumber(0, i+1);
            [values[i], values[rand]] = [values[rand], values[i]]
        }

        return values;
    }

    handleClick(answer, userResponse) {
        this.props.verifyAnswer(answer, userResponse);
        this.setState(this.getInitialState());
    }

    render() {
        const { question, answer, shuffledOptions } = this.state.questionSet;

        return (
            <Card style={{marginTop: '50px'}}>
                <div>
                    <h1>{question}</h1>
                </div>
                <div>
                    {
                        shuffledOptions.map((value, index) => {
                            return (
                                <div key={index}>
                                    <Button className="btn" key={index} onClick={() => this.handleClick(value, answer)}>
                                        <Card.Grid className="card-container">{value}</Card.Grid>
                                    </Button>
                                </div>
                            );
                        })
                    }
                </div>
            </Card>
        );
    }
}

export default Question;