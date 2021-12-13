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
    width: 120px;
    height: 120px;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
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
    color: #ffffff;
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
    display: flex;
    flex-direction: row;
  }
  .app-link {
    width: 202px;
    height: 60px;
  }
  .app-link-center {
    margin-left: 16px;
    margin-right: 16px;
  }
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        .wrap-app-link {
          flex-direction: column;
        }
        .app-link-center {
          margin-left: 0px;
          margin-right: 0px;
          margin-top: 16px;
          margin-bottom: 16px;      
        }
    `}
`;

const Footer = React.memo(() => {
  // Get started in a few minutes.
  return (
    <Styled>
      <div className="wrap-logo">
        <img src={logoStrokeImg} className="logo" alt="logo" />
      </div>
      <p className="footer-title">Get started in a few minutes.</p>
      <div className="banner-wrap-content">
        <Row className="wrap-app-link">
          <a href="https://apps.apple.com/us/app/incognito-crypto-wallet/id1475631606?ls=1">
            <img className="app-link" src={appstore} alt="appstore" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.incognito.wallet">
            <img className="app-link app-link-center" src={ggplay} alt="ggplay" />
          </a>
          <a href="https://github.com/incognitochain/incognito-wallet/releases">
            <img className="app-link" src={apk} alt="apk" />
          </a>
        </Row>
      </div>
    </Styled>
  );
});

export default Footer;
