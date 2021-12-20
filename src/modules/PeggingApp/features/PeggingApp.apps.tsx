import avveImg from '@images/avve-logo.png';
import cakeImg from '@images/cake-icon.png';
import linkImg from '@images/link-icon.png';
import openSeaImg from '@images/opensea-logo.png';
import raydiumImg from '@images/raydium-logo.png';
import solendImg from '@images/solend-logo.png';
import unknowImg from '@images/unknow-icon.png';
import { Col, Row } from 'antd';
import React from 'react';
import { isMobile } from 'react-device-detect';
import styled, { ITheme } from 'styled-components';
const Styled = styled(Row)`
  margin-top: 60px;
  flex-direction: row;
  justify-content: space-between;
  .line-view {
    width: 24px;
  }
  .line {
    width: 0;
    height: 16px;
  }
  .app-margin-right {
    margin-right: 20px;
  }
  .app-margin-left {
    margin-left: 20px;
  }
  .app-margin-top {
    margin-top: 40px;
  }
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        flex-direction: column;
        margin-top: 0px;
        .app-margin-top {
            margin-top: 0px;
        }
        .app-margin-right {
          margin-right: 0px;
        }
        .app-margin-left {
          margin-left: 0px;
        }
        .app-margin-top-small {
            margin-top: 8px;
        }
  `}
`;
const StyledItem = styled(Col)`
  //flex: 1;
  .wrap-item-content {
    padding: 60px 60px 50px;
    border-radius: 16px;
  }
  .full-height {
    height: 100%;
  }
  .item-img {
    margin-right: 32px;
    width: 120px;
    height: 120px;
  }
  .large-text {
    font-weight: 600;
    font-size: 34px;
    line-height: 48px;
  }
  .normal-text {
    height: fit-content;
  }

  .wrap-name {
    display: inline-flex;
    align-items: baseline;
  }
  .wrap-chain {
    margin-right: 10px;
    min-height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 16px;
    padding-left: 16px;
    border-radius: 8px;
    background: ${({ theme }) => theme.background3};
  }
  .wrap-main-content {
  }

  .desc-text {
    margin-top: 40px;
  }
  .medium-text {
    font-size: 22px;
  }

  .name-desc-text {
    margin-left: 16px;
  }

  .link-text {
    color: ${({ theme }) => theme.text3};
    cursor: pointer;
  }

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToLarge`
      .wrap-item-content {
        padding: 32px 32px 40px;
      }
      .item-img {
        width: 90px;
        height: 90px;
      }
      .large-text {
        font-size: 22px;
        line-height: 30px;
      }
      .medium-text {
        font-size: 16px;
      }
  `};

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        width: 100%;
        margin-top: 4px;
        .wrap-item-content {
           padding: 16px 16px 24px;
        }
        .wrap-name {
            flex-direction: column;
        }
        .item-img {
            margin-right: 16px;
            width: 50px;
            height: 50px;
        }
       .desc-text {
         margin-top: 24px;
         font-size: 16px;
         line-height: 24px;
       }
        .wrap-chain {
            min-height: 24px;
        }
        .chain-text {
            font-weight: 500;
            font-size: 12px;
            line-height: 18px;
        }
  `};

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
      .wrap-name {
        display: inline-flex;
        align-items: baseline;
      }
      .name-desc-text {
        margin-left: 0px;
        font-size: 14px;
        line-height: 21px;
      }
      .wrap-apps-head {
      }
      .wrap-chain {
        margin-right: 8px;
        border-radius: 4px;
        padding-top: 3px;
        padding-bottom: 3px;
      }
      .chain-text {
        line-height: 18px;
      }
  `};
`;

const Item = React.memo(({ className, data }: { className?: string; data: any }) => {
  const ChainList = React.useMemo(
    () => (
      <Row style={{ minWidth: 250 }}>
        {data.chain.map((item: any) => (
          <div style={{ marginTop: 12 }} key={item} className="wrap-chain background3">
            <p className="chain-text">{item}</p>
          </div>
        ))}
      </Row>
    ),
    [],
  );
  return (
    <StyledItem xs={24} lg={12} key={data.name}>
      <Col className={`wrap-item-content background2 ${className}`}>
        <Row align="middle" className="wrap-apps-head">
          <img src={data.img} className="item-img" alt="icon" />
          <Col className="wrap-main-content">
            <div className="wrap-name">
              <p className="large-text fw-medium normal-text">{data.name}</p>
              <p className="medium-text text2 normal-text name-desc-text">
                {data.nameDesc}
              </p>
            </div>
            {!isMobile && ChainList}
          </Col>
          {isMobile && ChainList}
        </Row>
        <p className="medium-text normal-text desc-text">
          {data.desc}{' '}
          {!!data.link && (
            <span
              className="link-text"
              onClick={() => {
                window.open(data.linkPath, '_blank');
              }}>
              {` ${data.link}`}
              <img
                src={linkImg}
                style={{ width: isMobile ? 14 : 18, height: 'auto', marginLeft: 5 }}
                alt="link-icon"
              />
            </span>
          )}
        </p>
      </Col>
    </StyledItem>
  );
});

const PeggingListApps = () => {
  return (
    <Styled>
      <Item
        data={{
          img: cakeImg,
          name: 'pPancake',
          nameDesc: 'Private Pancake Swap',
          chain: ['Binance Smart Chain', 'DEX'],
          desc: "Trade anonymously on Binance Smart Chain's leading DEX. Deep liquidity and super low fees – now with privacy.",
        }}
        className="app-margin-right"
      />
      <Item
        data={{
          img: avveImg,
          name: 'pAave',
          nameDesc: 'Private Aave',
          chain: ['Polygon', 'Lending'],
          desc: 'Earn interest on deposits and borrow assets on everyone’s favorite lending protocol – confidentially.',
        }}
        className="app-margin-top-small app-margin-left full-height"
      />
      <Item
        data={{
          img: openSeaImg,
          name: 'pOpenSea',
          nameDesc: 'Private OpenSea',
          chain: ['Polygon', 'Marketplace', 'NFT'],
          desc: 'Purchase and hoard rare digital items and collectibles without anyone knowing about it.',
        }}
        className="app-margin-top app-margin-top-small app-margin-right"
      />
      <Item
        data={{
          img: raydiumImg,
          name: 'pRaydium',
          nameDesc: 'Private Raydium',
          chain: ['Solana', 'DEX', 'Farming'],
          desc: 'Explore DeFi on Solana with full privacy for your activity and assets. Swap, provide liquidity, farm, and stake.',
        }}
        className="app-margin-top app-margin-top-small app-margin-left"
      />
      <Item
        data={{
          img: solendImg,
          name: 'pSolend',
          nameDesc: 'Private Solend',
          chain: ['Solana', 'Lending'],
          desc: 'Get privacy for what you lend, borrow, and earn on Solana. Protect your activity from prying eyes.',
        }}
        className="app-margin-top app-margin-top-small app-margin-right"
      />
      <Item
        data={{
          img: unknowImg,
          name: 'pAnything',
          nameDesc: 'Private Anything You Want',
          chain: ['Blockchain', 'Use case'],
          desc: 'The Incognito community is building out the 2022 roadmap. Which app do you want privacy for?',
          link: 'Join the conversation',
          linkPath: 'https://we.incognito.org/t/incognito-2022-technical-roadmap/15002',
        }}
        className="app-margin-top app-margin-top-small app-margin-left"
      />
    </Styled>
  );
};

export default React.memo(PeggingListApps);
