import React from 'react';

import {
  Box,
  Label,
  Input,
  Result
} from './style';

const Question = ({id, question, answer, userAnswer, answered, onChange}) => (
  <Box>
    <Label htmlFor={id}>{question}</Label>
    <Input
      id={id}
      name={question}
      value={userAnswer}
      disabled={answered}
      onChange={onChange} />
    {answered && <Result>Resposta: {answer}</Result>}
  </Box>
);

export default Question;
