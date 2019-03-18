import React, { PureComponent } from 'react';

import { Box, Footer } from './style';

import Question from '../Question';

import Title from '../../styles/shared/Title';
import Subtitle from '../../styles/shared/Subtitle';
import Button from '../../styles/shared/Button';

class Quiz extends PureComponent {
  state = {
    questions: [],
    answered: false,
    styleType: 'green',
    textButton: 'Ver resultados',
    counterCorrect: 0,
  }

  handleClickButton = event => {
    this.state.answered ? this.resetCountAnswer() : this.countAnswer();
    this.toggleAnswered();
  }

  handleChangeQuestion = event => {
    const { name, value } = event.target
    this.setState({ [name]: value });
  }

  resetCountAnswer() {
    this.setState({ counterCorrect: 0 });
    return;
  }

  countAnswer() {
    let counterCorrect = this.state.counterCorrect;
    counterCorrect = this.state.questions.reduce((accumulator, question) => {
      const correctAnswer = question.answer || '';
      const userAnswer = this.state[question.question] || '';
      return accumulator + (correctAnswer.toString().toLowerCase() === userAnswer.toString().toLowerCase());
    }, counterCorrect);

    this.setState({ counterCorrect });
  }

  toggleAnswered() {
    const answers = {};
    this.state.questions.map(({question}) => answers[question] = '');
    
    this.setState({
      answered: !this.state.answered,
      styleType: !this.state.styleType ? 'green' : '',
      textButton: this.state.textButton === 'Ver resultados' ? 'Jogar novamente' : 'Ver resultados',
      ...answers
    });
  }

  componentDidMount() {
    this.setState({
      questions: this.props.questions || []
    });
  }
  
  render() {
    return (
      <Box>
        <Title>Você conhece mesmo a saga Harry Potter?</Title>
        <Subtitle>Este teste foi criado para você!</Subtitle>
        {this.state.questions.map((question) => (
          <Question 
            {...question}
            userAnswer={this.state[question.question]}
            answered={this.state.answered}
            onChange={this.handleChangeQuestion} />
        ))}
        <Footer>
          <Button onClick={this.handleClickButton} styleType={this.state.styleType}>{this.state.textButton}</Button>
          {this.state.answered && <p>Você acertou: {this.state.counterCorrect}!</p>}
        </Footer>
      </Box>
    );
  }
}

export default Quiz;
