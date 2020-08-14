import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import ShowTopic from '../pages/ShowTopic';
import NotFoundPage from '../pages/NotFoundPage';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/topic" component={ShowTopic} isPrivate />

      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
