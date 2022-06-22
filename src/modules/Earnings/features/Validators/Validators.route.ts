import { IRouteProps } from '@src/modules';
import { lazy } from 'react';

export const route = '/earnings/validator';

const ValidatorsRoute: IRouteProps = {
  path: route,
  exact: true,
  component: lazy(() => import('@src/modules/Earnings/features/Validators/Validators')),
  name: 'Validators',
  to: route,
};

export default ValidatorsRoute;
