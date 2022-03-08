import { IRouteProps } from '@src/modules';
import { lazy } from 'react';

export const route = '/privacy-policy';

const PolicyRoute: IRouteProps = {
  path: route,
  exact: true,
  component: lazy(() => import('@modules/Policy')),
  name: 'Policy',
  to: route,
};

export default PolicyRoute;
