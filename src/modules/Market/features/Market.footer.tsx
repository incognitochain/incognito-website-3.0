import apk from '@images/install/apk.png';
import appstore from '@images/install/appstore.png';
import ggplay from '@images/install/play.png';
import logoStrokeImg from '@images/logo-stroke.png';
import { Col, Row } from 'antd';
import React from 'react';
import styled, { ITheme } from 'styled-components';

const Styled = styled.div`
  padding-top: 120px;
  padding-bottom: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .wrap-logo {
    border: 1px solid ${({ theme }) => theme.white};
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
  }
  .logo {
    width: 88px;
    height: 88px;
  }
  .footer-title {
    font-weight: 500;
    font-size: 64px;
    line-height: 70px;
    letter-spacing: 0.015em;
    color: ${({ theme }) => theme.text1};
    margin-top: 40px;
    text-align: center;
  }
  .banner-wrap-content {
    right: 0;
    left: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .wrap-app-link {
    margin-top: 50px;
    width: 33%;
  }
  .app-link {
    width: 100%;
  }
  .banner-title {
    white-space: pre-wrap;
    font-size: 76px;
    line-height: 82px;
  }
  .ant-col {
    padding-right: 16px;
  }
  .ant-col:first-child {
  }
  .banner-sub-title {
    margin-top: 24px;
  }
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        padding-top: 40px;
        padding-bottom: 40px;
        .wrap-app-link {
          width: 100%;
        }
        .logo {
            width: 53px;
            height: 53px;
        }
        .wrap-logo {
            width: 72px;
            height: 72px;
        }
        .app-link-center {
          margin-left: 0px;
          margin-right: 0px;
          margin-top: 16px;
          margin-bottom: 16px;      
        }
        .footer-title {
          font-size: 28px;
          line-height: 38px;
          text-align: center;
          letter-spacing: 0.01em;
          max-width: 185px;
          margin-top: 16px;
        }
        .ant-col {
          padding-right: 4px;
          padding-left: 4px;
        }
        .wrap-app-link {
          margin-top: 24px;
        }
    `}
`;

const Footer = React.memo(() => {
  // Get started in a few minutes.
  return (
    <Styled className="default-padding-horizontal">
      <div className="wrap-logo">
        <img src={logoStrokeImg} className="logo" alt="logo" />
      </div>
      <p className="footer-title">Get started in a few minutes.</p>
      <div className="banner-wrap-content">
        <Row className="wrap-app-link">
          <Col span={8}>
            <a href="https://apps.apple.com/us/app/incognito-crypto-wallet/id1475631606?ls=1">
              <img className="app-link" src={appstore} alt="appstore" />
            </a>
          </Col>
          <Col span={8}>
            <a href="https://play.google.com/store/apps/details?id=com.incognito.wallet">
              <img className="app-link" src={ggplay} alt="ggplay" />
            </a>
          </Col>
          <Col span={8}>
            <a href="https://github.com/incognitochain/incognito-wallet/releases">
              <img className="app-link" src={apk} alt="apk" />
            </a>
          </Col>
        </Row>
      </div>
    </Styled>
  );
});

export default Footer;
