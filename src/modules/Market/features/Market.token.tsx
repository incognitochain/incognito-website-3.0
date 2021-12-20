import { mainPTokenSelector } from '@src/app-redux/token/Token.selector';
import { IPTokenState } from '@src/app-redux/token/Token.type';
import { ImageCached, Tooltip } from '@src/components';
import { marketTranslateSelector } from '@src/configs';
import { colorsSelector } from '@src/theme';
import { Col, Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import styled, { ITheme } from 'styled-components';

export const Styled = styled(Col)`
  border: 1px solid ${({ theme }) => theme.border1};
  border-radius: 16px;
  overflow: hidden;
  .wrap-token {
    box-sizing: border-box;
    min-height: 520px;
  }
  .token-main-title {
    background-color: ${({ theme }) => theme.background2};
    height: 72px;
  }
  .token-wrap-item {
    height: 88px;
    align-items: center;
    justify-content: space-between;
    padding-left: 32px;
    padding-right: 32px;
    border-bottom: 1px solid ${({ theme }) => theme.border1};
    // border-right: 1px solid ${({ theme }) => theme.background2};
  }
  .token-wrap-item:last-child {
    border-bottom-width: 0;
  }
  .token-name {
    margin-left: 0;
  }
  .token-wrap-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .token-wrap-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 32px;
    padding-right: 32px;
    height: 56px;
    justify-content: space-between;
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
  .medium-text {
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.01em;
  }
  .regular-text {
    font-size: 16px;
    line-height: 24px;
  }
  .tab-header-title-left {
    font-weight: 600;
    font-size: 26px;
    line-height: 39px;
    letter-spacing: 0.01em;
  }
  .header-text {
    font-size: 16px;
    line-height: 24px;
  }
  .token-padding {
    padding-left: 32px;
    padding-right: 32px;
  }
  .gradient-view {
    background: linear-gradient(180deg, rgba(26, 26, 26, 0.2) 0%, #1a1a1a 100%);
    height: 88px;
    position: absolute;
    bottom: 0;
    right: 15px;
    width: 100%;
    visibility: hidden;
  }
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToLarge`
    .wrap-token {
        min-height: 480px;
    }
    .token-wrap-item {
        height: 80px;
    }
    .token-main-title {
      height: 64px;
    }
    .image-token {
        width: 48px;
        height: 48px;
        border-radius: 28px;
        margin-right: 10px;
    }
    .tab-header-title-left {
      font-size: 20px;
      line-height: 30px;
    }
    .tab-header-title-right {
      font-size: 16px;
      line-height: 24px;
    }
    .header-text {
        font-size: 16px;
        line-height: 24px;
    }
    .medium-text {
        font-size: 18px;
        line-height: 27px;
    }
  `}
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        border-width: 0px;
        border-radius: 0px;
        .wrap-token {
        }
        .token-wrap-item {
            padding-left: 16px;
            padding-right: 16px;
        }
        .token-wrap-header {
            padding-left: 16px;
            padding-right: 16px;
        }
        .image-token {
            width: 32px;
            height: 32px;
            border-radius: 28px;
            margin-right: 10px;
        }
        .token-main-title {
            height: 59px;
        }
        .medium-text {
            font-size: 14px;
            line-height: 21px;
        }
        .token-padding {
            padding-left: 16px;
            padding-right: 16px;
        }
        .tab-header-title-right {
            padding-top: 4px;
            font-size: 14px;
        }
        .tab-header-title-left {
            font-size: 18px;
        }
        .header-text {
          font-size: 14px;
          line-height: 24px;
        }
          .token-wrap-item:last-child {
            border-bottom-width: 1px;
          }
    `}
`;

const Item = React.memo(({ item }: { item: IPTokenState }) => {
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
    <Row className={`token-wrap-item`}>
      <Col span={12} className="wrap-first-item">
        <ImageCached src={item.image} className="image-token" />
        <Col className="token-wrap-section" style={{ flex: 1 }}>
          <p className="medium-text">{item.pSymbol}</p>
          <p className="text2 token-name">{item.pName}</p>
        </Col>
      </Col>
      <Col span={6}>
        <p className="medium-text text-align-right">{`$${item.priceUSDHuman}`}</p>
      </Col>
      <Col span={6}>
        <p
          className="medium-text text-align-right"
          style={{ color: changeColor }}>{`${item.changeStr}`}</p>
      </Col>
    </Row>
  );
});

const MarketTokens = () => {
  const marketTrs = useSelector(marketTranslateSelector);
  const tokens = useSelector(mainPTokenSelector);
  const renderItem = (item: IPTokenState, index: number) => (
    <Item key={item.tokenId} item={item} />
  );

  const Header = React.useMemo(
    () => (
      <Row className="token-wrap-header">
        <Col span={12} className="token-wrap-section">
          <p className="header-text text5">{marketTrs.name}</p>
        </Col>
        <Col span={6} className="header-text fw-medium text-align-right text5">
          {marketTrs.lastPrice}
        </Col>
        <Col span={6} className="header-text fw-medium text-align-right text5">
          {marketTrs.change24h}
        </Col>
      </Row>
    ),
    [],
  );
  return (
    <Styled xs={24} xl={11} xxl={11.5} className="token-extra">
      <Row
        justify="space-between"
        align="middle"
        className="token-main-title token-padding">
        <p className="tab-header-title-left fw-suppermedium">{marketTrs.privacyMarket}</p>
        <Tooltip
          key="Tooltip"
          title={marketTrs.whatPCoins}
          className="fs-medium fw-regular text3 tab-header-title-right"
        />
      </Row>
      {Header}
      <div className="wrap-token">{tokens.map(renderItem)}</div>
      <div className="gradient-view" />
    </Styled>
  );
};

export default React.memo(MarketTokens);
