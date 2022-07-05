import { IRouteProps } from '@src/modules';
import { lazy } from 'react';

export const route = '/earnings';

const EarningsRoute: IRouteProps = {
  path: route,
  exact: true,
  component: lazy(() => import('@src/modules/Earnings/Earnings')),
  name: 'Earnings',
  to: route,
};

export default EarningsRoute;
