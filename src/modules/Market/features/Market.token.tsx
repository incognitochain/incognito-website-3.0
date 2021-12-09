import { marketTranslateSelector } from '@src/configs';
import { Col } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import styled, { ITheme } from 'styled-components';

export const Styled = styled(Col)`
  .token-main-title {
    margin-top: 120px;
  }
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
    `}
`;

const MarketTokens = () => {
  const marketTrs = useSelector(marketTranslateSelector);
  return (
    <Styled>
      <p className="fs-avglarge fw-suppermedium token-main-title">
        {marketTrs.privacyMarket}
      </p>
    </Styled>
  );
};

export default React.memo(MarketTokens);
