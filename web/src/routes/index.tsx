import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Mistake from '../pages/Mistake';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <Route component={Mistake} />
    </Switch>
  );
};

export default Routes;
