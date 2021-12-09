import { mainPTokenSelector } from '@src/app-redux/token/Token.selector';
import { IPTokenState } from '@src/app-redux/token/Token.type';
import { TokenConstant } from '@src/common';
import { marketTranslateSelector } from '@src/configs';
import { Col } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import styled, { ITheme } from 'styled-components';

export const Styled = styled(Col)`
  .token-main-title {
    margin-top: 120px;
  }
  .token-wrap-item {
    display: flex;
    flex-direction: row;
  }
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
    `}
`;

const Item = React.memo(({ item }: { item: IPTokenState }) => {
  const getName = () => {
    if (item.tokenId === TokenConstant.PRV_TOKEN_ID) {
      return `${item.name} Incognito`;
    }
    return `Privacy ${item.name}`;
  };
  return (
    <div className="token-wrap-item">
      <p>{item.symbol}</p>
      <p>{getName()}</p>
    </div>
  );
});

const MarketTokens = () => {
  const marketTrs = useSelector(marketTranslateSelector);
  const tokens = useSelector(mainPTokenSelector);
  const renderItem = (item: IPTokenState) => <Item item={item} />;
  return (
    <Styled>
      <p className="fs-avglarge fw-suppermedium token-main-title">
        {marketTrs.privacyMarket}
      </p>
      {tokens.map(renderItem)}
    </Styled>
  );
};

export default React.memo(MarketTokens);
