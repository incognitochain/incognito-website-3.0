import { IRouteProps } from '@src/modules';
import { lazy } from 'react';

export const route = '/pegging-apps';

const PeggingAppRoute: IRouteProps = {
  path: route,
  exact: true,
  component: lazy(() => import('@modules/PeggingApp/PeggingApp.home')),
  name: 'Apps',
  to: route,
};

export default PeggingAppRoute;
