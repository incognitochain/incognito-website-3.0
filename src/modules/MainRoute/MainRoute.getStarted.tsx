import { actionGetPTokens } from '@src/app-redux/tokens/Token.action';
import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';

const withStarted = (WrappedComponent: FunctionComponent) => (props: any) => {
  const dispatch = useDispatch();
  const initApp = async () => {
    await Promise.all([dispatch(actionGetPTokens())]);
  };

  React.useEffect(() => {
    initApp();
  }, []);

  return <WrappedComponent {...props} />;
};

export default withStarted;
