import { mainPTokenSelector } from '@src/app-redux/token/Token.selector';
import { IPTokenState } from '@src/app-redux/token/Token.type';
import { TokenConstant } from '@src/common';
import { marketTranslateSelector } from '@src/configs';
import { Col, Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import styled, { ITheme } from 'styled-components';

export const Styled = styled(Col)`
  .token-extra {
    border: 1px solid ${({ theme }) => theme.border1};
    box-sizing: border-box;
    border-radius: 16px;
    margin-top: 40px;
    overflow: auto;
  }
  .token-main-title {
    margin-top: 120px;
  }
  .token-wrap-item {
    display: flex;
    flex-direction: row;
    height: 89px;
    align-items: center;
    justify-content: space-between;
    padding-left: 32px;
    padding-right: 32px;
    border-bottom: 1px solid ${({ theme }) => theme.border1};
  }
  .token-name {
    margin-left: 16px;
  }
  .token-price {
    min-width: 200px;
  }
  .token-change {
    min-width: 200px;
  }
  .token-wrap-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 250px;
  }
  .token-wrap-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 250px;
    padding-left: 32px;
    padding-right: 32px;
    height: 59px;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.border1};
  }
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        .token-extra {
            overflow-y: auto;
        }
        .token-wrap-item {
            padding-right: 32px;
        }
    `}
`;

const Item = React.memo(({ item, index }: { item: IPTokenState; index: number }) => {
  return (
    <div className={`token-wrap-item ${index % 2 !== 0 ? 'background2' : ''}`}>
      <div className="token-wrap-section">
        <p className="fs-superMedium">{item.pSymbol}</p>
        <p className="fs-superMedium text2 token-name">{item.pName}</p>
      </div>
      <p className="fs-superMedium text-align-right token-price">{`$${item.priceUSDHuman}`}</p>
      <p className="fs-superMedium text-align-right token-change">{`${item.changeStr}`}</p>
    </div>
  );
});

const MarketTokens = () => {
  const marketTrs = useSelector(marketTranslateSelector);
  const tokens = useSelector(mainPTokenSelector);
  const renderItem = (item: IPTokenState, index: number) => (
    <Item item={item} index={index} />
  );
  return (
    <Styled>
      <p className="fs-avglarge fw-suppermedium token-main-title">
        {marketTrs.privacyMarket}
      </p>
      <div className="token-extra">
        <div className="token-wrap-header background2">
          <div className="token-wrap-section">
            <p className="fs-superMedium text2">{marketTrs.name}</p>
          </div>
          <p className="fs-superMedium text-align-right token-price text2">
            {marketTrs.lastPrice}
          </p>
          <p className="fs-superMedium text-align-right token-change text2">
            {marketTrs.change24h}
          </p>
        </div>
        {tokens.map(renderItem)}
      </div>
    </Styled>
  );
};

export default React.memo(MarketTokens);
