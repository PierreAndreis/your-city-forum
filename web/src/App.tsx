import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppContext from './contexts';
import Routes from './routes';

import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <Router>
    <AppContext>
      <Routes />

      <GlobalStyles />
    </AppContext>

    <ToastContainer autoClose={3000} />
  </Router>
);

export default App;
