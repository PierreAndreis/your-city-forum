import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import GlobalStyles from './styles/global';

import dark from './styles/themes/dark';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <Router>
        <Routes />
      </Router>

      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
