import { mainPTokenSelector } from '@src/app-redux/token/Token.selector';
import { IPTokenState } from '@src/app-redux/token/Token.type';
import { ImageCached } from '@src/components';
import { marketTranslateSelector } from '@src/configs';
import { colorsSelector } from '@src/theme';
import { Col, Row } from 'antd';
import React from 'react';
import { isMobile } from 'react-device-detect';
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
  }
  .token-change {
  }
  .token-wrap-section {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .token-wrap-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 32px;
    padding-right: 32px;
    min-height: 59px;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.border1};
  }
  .image-token {
    width: 56px;
    height: 56px;
    border-radius: 28px;
    margin-right: 24px;
  }
  .wrap-first-item {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        .token-extra {
            overflow-x: scroll;
            border-width: 0px;
            border-radius: 0px;
        }
        .token-wrap-item {
            padding-left: 16px;
            padding-right: 16px;
        }
        .token-wrap-header {
            padding-left: 16px;
            padding-right: 16px;
        }
        .token-wrap-section {
            flex-direction: column;
            align-items: flex-start;
        }
        .token-name {
            margin-left: 0px;
        }
        .image-token {
            width: 32px;
            height: 32px;
            border-radius: 28px;
            margin-right: 10px;
        }
    `}
`;

const Item = React.memo(({ item, index }: { item: IPTokenState; index: number }) => {
  const colors = useSelector(colorsSelector);
  const changeColor = React.useMemo(
    () =>
      item.isTokenDecrease === undefined
        ? colors.text1
        : item.isTokenDecrease
        ? colors.red1
        : colors.green1,
    [colors, item.isTokenDecrease],
  );

  return (
    <Row className={`token-wrap-item ${index % 2 !== 0 ? 'background2' : ''}`}>
      <Col span={12} className="wrap-first-item">
        <ImageCached src={item.image} className="image-token" />
        <Col className="token-wrap-section">
          <p className="fs-superMedium">{item.pSymbol}</p>
          <p className="fs-superMedium text2 token-name">{item.pName}</p>
        </Col>
      </Col>
      <Col span={6}>
        <p className="fs-superMedium text-align-right token-price">{`$${item.priceUSDHuman}`}</p>
      </Col>
      <Col span={6}>
        <p
          className="fs-superMedium text-align-right token-change"
          style={{ color: changeColor }}>{`${item.changeStr}`}</p>
      </Col>
    </Row>
  );
});

const MarketTokens = () => {
  const marketTrs = useSelector(marketTranslateSelector);
  const tokens = useSelector(mainPTokenSelector);
  const renderItem = (item: IPTokenState, index: number) => (
    <Item key={item.tokenId} item={item} index={index} />
  );

  const Header = React.useMemo(
    () => (
      <Row className="token-wrap-header background2">
        <Col span={12} className="token-wrap-section">
          <p className="fs-superMedium text2">{marketTrs.name}</p>
        </Col>
        <Col
          span={6}
          className="fs-superMedium fw-medium text-align-right token-price text2">
          {marketTrs.lastPrice}
        </Col>
        <Col
          span={6}
          className="fs-superMedium fw-medium text-align-right token-change text2">
          {marketTrs.change24h}
        </Col>
      </Row>
    ),
    [],
  );
  return (
    <Styled className={`${isMobile ? '' : 'default-padding-horizontal'}`}>
      <Row justify="space-between" align="middle" className="token-main-title">
        <p className="fs-avglarge fw-suppermedium">{marketTrs.privacyMarket}</p>
        <a
          href="https://we.incognito.org"
          target="_blank"
          className="fs-medium fw-regular text4"
          rel="noreferrer">
          {marketTrs.whatPCoins}
        </a>
      </Row>
      <div className="token-extra">
        {Header}
        {tokens.map(renderItem)}
      </div>
    </Styled>
  );
};

export default React.memo(MarketTokens);
