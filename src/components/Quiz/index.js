import React, { PureComponent } from 'react';

import { Box } from './style';

import Title from '../../styles/shared/Title';
import Subtitle from '../../styles/shared/Subtitle';

import Question from '../Question';

class Quiz extends PureComponent {
  state = {
    questions: []
  }

  componentDidMount() {
    this.setState({
      questions: this.props.questions || []
    })
  }
  
  render() {
    return (
      <Box>
        <Title>Você conhece mesmo a saga Harry Potter?</Title>
        <Subtitle>Este teste foi criado para você!</Subtitle>
        {this.state.questions.map(question => (
          <Question {...question} key={question.id}/>
        ))}
      </Box>
    );
  }
}

export default Quiz;
