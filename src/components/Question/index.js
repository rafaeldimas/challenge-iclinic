import React, { PureComponent } from 'react';

import {
  Box,
  Label,
  Input,
  Result
} from './style';

class Question extends PureComponent {
  state = {
    id: '',
    question: '',
    answer: '',
    answered: false,
    userAnswer: '',
  }

  componentDidMount() {
    this.setState({
      id: this.props.id || '',
      question: this.props.question || '',
      answer: this.props.answer || '',
      answered: this.props.answered || true,
      userAnswer: '',
    })
  }

  render() {
    return (
      <Box>
        <Label htmlFor={this.state.id}>{this.state.question}</Label>
        <Input id={this.state.id} disabled={this.state.answered} />
        {this.state.answered && <Result>Resposta: {this.state.answer}</Result>}
      </Box>
    );
  }
}

export default Question;
