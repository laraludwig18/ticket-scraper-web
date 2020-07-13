import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const hasUserId = localStorage.getItem('@TicketScraper:userId');

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!hasUserId ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: hasUserId ? '/home' : '/',
              state: {
                from: location,
              },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
