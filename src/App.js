import React, { Fragment } from 'react';
import Quiz from './components/Quiz';

import { Reset, Base } from './styles/global';

import questions from './data/questions.json';

const App = () => (
  <Fragment>
    <Reset/>
    <Base/>
    <Quiz questions={questions}/>
  </Fragment>
);
  
export default App;
  