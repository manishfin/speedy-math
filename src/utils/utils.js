
const operators = ['+', '-', '*', '/'];

const digit = [10, 100];

export const generateRandomNumber = (min=1, max=100) => Math.floor(Math.random() * (max - min) + min);

export const round = (value, place=0) => Math.round(value * Math.pow(10, place)) / Math.pow(10, place);

export const getRandomValue = (values) => {
    if (!(Array.isArray(values) && values.length)) return;

    const index = generateRandomNumber(0, values.length);
    return values[index];
}

export const generateQuestionAndAnswer = () => {
    const leftNum = generateRandomNumber(1, getRandomValue(digit));
    const rightNum = generateRandomNumber(1, getRandomValue(digit));
    const operator = getRandomValue(operators);
    const question = `${leftNum} ${operator} ${rightNum}`;
    const answer = round(eval(question), 1);

    return {
        question,
        answer,
    };
};
