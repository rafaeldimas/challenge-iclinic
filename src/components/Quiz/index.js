import React, { PureComponent } from 'react';

import { QuizBox } from './style';

import Title from '../../styles/shared/Title';
import Subtitle from '../../styles/shared/Subtitle';

class Quiz extends PureComponent {
  state = {}
  
  render() {
    return (
      <QuizBox>
        <Title>Você conhece mesmo a saga Harry Potter?</Title>
        <Subtitle>Este teste foi criado para você!</Subtitle>
      </QuizBox>
    );
  }
}

export default Quiz;
