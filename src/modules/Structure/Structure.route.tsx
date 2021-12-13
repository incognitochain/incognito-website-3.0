import { IRouteProps } from '@src/modules';
import { lazy } from 'react';

export const route = '/infrastructure';

const StructureRoute: IRouteProps = {
  path: route,
  exact: true,
  component: lazy(() => import('@modules/Structure')),
  name: 'infrastructure',
  to: route,
};

export default StructureRoute;
