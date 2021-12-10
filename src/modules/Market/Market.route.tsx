import { IRouteProps } from '@src/modules';
import { lazy } from 'react';

export const route = '/';

const MarketRoute: IRouteProps = {
  path: route,
  exact: true,
  component: lazy(() => import('@modules/Market')),
  name: 'Market',
  to: route,
};

export default MarketRoute;
