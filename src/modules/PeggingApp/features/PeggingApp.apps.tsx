import cakeImg from '@images/cake-icon.png';
import linkImg from '@images/link-icon.png';
import unknowImg from '@images/unknow-icon.png';
import { Col, Row } from 'antd';
import React from 'react';
import { isMobile } from 'react-device-detect';
import styled, { ITheme } from 'styled-components';
const Styled = styled(Row)`
  margin-top: 60px;
  justify-content: center;
  flex-direction: row;
  .line-view {
    width: 24px;
  }
  .line {
    width: 0;
    height: 16px;
  }
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        flex-direction: column;
        margin-top: 26px;
  `}
`;
const StyledItem = styled.div`
  border-radius: 16px;
  flex: 1;
  padding: 60px 60px 50px;
  .item-img {
    margin-right: 32px;
    width: 120px;
    height: 120px;
  }
  .large-text {
    font-size: 34px;
    line-height: 41px;
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
      padding: 16px 16px 24px;
      .item-img {
        width: 80px;
        height: 80px;
      }
      .large-text {
        font-size: 20px;
        line-height: 30px;
      }
      .medium-text {
        font-size: 16px;
      }
  `};

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        width: 100%;
        margin-top: 8px;
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

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToSmall`
      .wrap-name {
        display: inline-flex;
        align-items: baseline;
      }
      .name-desc-text {
        margin-left: 0px;
        font-size: 14px;
        line-height: 21px;
      }
  `};
`;

const Item = React.memo(({ className, data }: { className?: string; data: any }) => {
  const ChainList = React.useMemo(
    () => (
      <Row style={{ marginTop: 12 }}>
        {data.chain.map((item: any) => (
          <div key={item} className="wrap-chain background3">
            <p className="chain-text">{item}</p>
          </div>
        ))}
      </Row>
    ),
    [],
  );
  return (
    <StyledItem className={`background2 ${className}`}>
      <Row align="middle">
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
          chain: ['Binance Smart Chain', 'Dex'],
          desc: "Trade anonymously on Binance Smart Chain's leading DEX. Deep liquidity and super low fees – now with privacy.",
        }}
      />
      <div className="line-view" />
      <Item
        data={{
          img: unknowImg,
          name: 'pAnything',
          nameDesc: 'Private Anything You Want',
          chain: ['Blockchain', 'Use case'],
          desc: 'The Incognito community is building out the 2022 roadmap. Which app do you want privacy for?',
          link: 'Join the conversation',
          linkPath: 'https://we.incognito.org/',
        }}
      />
    </Styled>
  );
};

export default React.memo(PeggingListApps);
