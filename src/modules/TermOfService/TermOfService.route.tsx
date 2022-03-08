import { IRouteProps } from '@src/modules';
import { lazy } from 'react';

export const route = '/term-of-service';

const MarketRoute: IRouteProps = {
  path: route,
  exact: true,
  component: lazy(() => import('@modules/TermOfService')),
  name: 'TermOfService',
  to: route,
};

export default MarketRoute;
