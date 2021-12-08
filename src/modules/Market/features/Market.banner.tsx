import marketBanner from '@images/banners/market-banner.png';
import apk from '@images/install/apk.png';
import appstore from '@images/install/appstore.png';
import ggplay from '@images/install/play.png';
import { marketTranslateSelector } from '@src/configs';
import { Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import styled, { ITheme } from 'styled-components';

export const Image = styled.img`
  width: 100%;
  position: relative;
  height: 726px;
  object-fit: cover;
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToSmall`
      height: 80vh;
    `}
`;

export const Styled = styled.div`
  margin-top: 47px;
  position: relative;
  .banner-wrap-content {
    position: absolute;
    right: 0;
    left: 0;
    margin: auto;
    top: 50%;
    transform: translateY(-50%);
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
  .title {
    text-align: center;
    white-space: pre-wrap;
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

const MarketBanner = () => {
  const marketTrs = useSelector(marketTranslateSelector);
  return (
    <Styled>
      <Image src={marketBanner} alt="market-banner" />
      <div className="banner-wrap-content">
        <p className="text1 fs-superlarge fw-medium title">{marketTrs.mainTitle}</p>
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
};

export default React.memo(MarketBanner);
