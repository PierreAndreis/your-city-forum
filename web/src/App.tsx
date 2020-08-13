import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppContext from './contexts';
import Routes from './routes';

import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <Router>
    <AppContext>
      <Routes />

      <GlobalStyles />
    </AppContext>
  </Router>
);

export default App;
