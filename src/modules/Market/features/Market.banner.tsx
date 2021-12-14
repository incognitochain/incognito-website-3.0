import apk from '@images/install/apk.png';
import appstore from '@images/install/appstore.png';
import ggplay from '@images/install/play.png';
import { marketTranslateSelector } from '@src/configs';
import { Col, Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import styled, { ITheme } from 'styled-components';

export const Styled = styled(Col)`
  display: flex;
  flex-direction: column;
  .wrap-app-link {
    margin-top: 50px;
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
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        padding-bottom: 48px;
        .banner-title {
          font-size: 44px;
          line-height: 48px;
          text-align: center;
          letter-spacing: 0.01em;
        }
        .wrap-app-link {
          margin-top: 24px;
        }
        .ant-col {
          padding-right: 4px;
          padding-left: 4px;
        }
    `}
`;

const MarketBanner = () => {
  const marketTrs = useSelector(marketTranslateSelector);
  return (
    <Styled xs={24} xl={11} xxl={9}>
      <p className="text1 fw-medium banner-title">{marketTrs.mainTitle}</p>
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
    </Styled>
  );
};

export default React.memo(MarketBanner);
