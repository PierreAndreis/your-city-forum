import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouterProps,
  Redirect,
} from 'react-router-dom';

interface RouteProps extends ReactDOMRouterProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  component: Component,
  isPrivate = false,
  ...rest
}) => {
  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return 1 < 0 === isPrivate ? <Component /> : <Redirect to="/" />;
      }}
    />
  );
};

export default Route;
