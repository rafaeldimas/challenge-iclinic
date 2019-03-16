import React, { Fragment } from 'react';
import Quiz from './components/Quiz';

import { Reset, Base } from './styles/global';

const App = () => (
  <Fragment>
    <Reset/>
    <Base/>
    <Quiz/>
  </Fragment>
);
  
export default App;
  