import SectionLink from '@components/SectionLink';
import apk from '@images/install/apk.png';
import appstore from '@images/install/appstore.png';
import ggplay from '@images/install/play.png';
import SectionHead from '@src/components/SectionHead';
import { marketTranslateSelector } from '@src/configs';
import { Col, Row } from 'antd';
import React from 'react';
import { isMobile } from 'react-device-detect';
import { useSelector } from 'react-redux';
import styled, { ITheme } from 'styled-components';

export const Styled = styled(Col)`
  display: flex;
  flex-direction: column;
  .wrap-app-link {
    display: flex;
    margin-top: 50px;
  }
  .app-link {
    width: 100%;
  }
  .ant-col {
    padding-right: 16px;
  }
  .ant-col:first-child {
  }
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToLarge`
      .wrap-app-link {
        margin-top: 32px;
      }
  `}
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        padding-bottom: 48px;
        .banner-title {
          text-align: center;
        }
        .banner-sub-title {
          text-align: center;          
        }
        .wrap-app-link {
          margin-top: 24px;
        }
        .ant-col {
          padding-right: 4px;
          padding-left: 4px;
        }
        .section-head {
            margin: auto;
            margin-bottom: 16px
        }
        .section-link {
            margin: auto;
        }
    `}
`;

const MarketBanner = () => {
  const marketTrs = useSelector(marketTranslateSelector);
  return (
    <Styled
      xs={24}
      xl={11}
      xxl={9}
      className={`${isMobile ? 'default-padding-horizontal' : ''}`}>
      <SectionHead title="Privacy Markets" className="section-head" />
      <p className="text1 fw-medium special-main-title-text banner-title">
        {marketTrs.mainTitle}
      </p>
      <Col xs={24} lg={22}>
        <p className="text2 sub-title-text banner-sub-title">
          {`Here, your coins are privacy coins. Trade them cross-chain, commission-free.`}
        </p>
      </Col>
      <Col xs={24} xl={22} xxl={23} className="wrap-app-link">
        <Col xs={8} lg={8} xxl={6}>
          <a href="https://apps.apple.com/us/app/incognito-crypto-wallet/id1475631606?ls=1">
            <img className="app-link" src={appstore} alt="appstore" />
          </a>
        </Col>
        <Col xs={8} lg={8} xxl={6}>
          <a href="https://play.google.com/store/apps/details?id=com.incognito.wallet">
            <img className="app-link" src={ggplay} alt="ggplay" />
          </a>
        </Col>
        <Col xs={8} lg={8} xxl={6}>
          <a href="https://github.com/incognitochain/incognito-wallet/releases">
            <img className="app-link" src={apk} alt="apk" />
          </a>
        </Col>
      </Col>
      <SectionLink className="section-link" />
    </Styled>
  );
};

export default React.memo(MarketBanner);
