import httpCoinService from '@services/rpcClient/rpchttpcoinservice';
import { Col } from 'antd';
import React from 'react';
import styled, { ITheme } from 'styled-components';

export const Styled = styled(Col)`
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
    `}
`;

const MarketTokens = () => {
  const handleGetPools = async () => {
    try {
      const res = await httpCoinService.apiGetListPools();
    } catch (e) {
      // console.log('SANG TEST::: error', e);
    }
  };

  React.useEffect(() => {
    handleGetPools();
  }, []);

  return <Styled></Styled>;
};

export default React.memo(MarketTokens);
