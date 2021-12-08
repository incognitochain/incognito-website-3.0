import { IRouteProps } from '@src/modules';
import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import enhance from './MainRoute.enhance';
import { IProps } from './MainRoute.inteface';

const Styled = styled.div``;

const MainRoute = (props: IProps & any) => {
  const { routes } = props;
  return (
    <Styled>
      <Switch>
        <Suspense fallback={null}>
          {routes.map((route: IRouteProps) => (
            <Route {...route} key={route.path} />
          ))}
        </Suspense>
      </Switch>
    </Styled>
  );
};

export default enhance(React.memo(MainRoute));
