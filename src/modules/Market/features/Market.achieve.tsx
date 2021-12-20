import { marketTranslateSelector } from '@src/configs';
import { Card, Col, List, Row } from 'antd';
import React from 'react';
import { isMobile } from 'react-device-detect';
import { useSelector } from 'react-redux';
import styled, { ITheme } from 'styled-components';

export const Styled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .achieve-title {
    text-align: center;
  }
  .achieve-sub-title {
    text-align: center;
  }
  .achieve-margin-right ~ .achieve-margin-right {
    margin-left: 24px;
  }

  .achieve-wrap {
    margin-top: 80px;
  }
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
          padding-bottom: 40px;
          .achieve-sub-title {
              margin-top: 8px;
          }
          .ant-card-body {
            padding: 0px;
            padding-top: 24px;
          }
          .achieve-wrap {
            margin-top: 4px;
          }
    `}
`;

const Item = styled.div`
  .achieve-circle {
    width: 220px;
    height: 220px;
    border-radius: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background3};
    margin: auto;
  }
  .achieve-item-title {
    font-size: 54px;
    margin-bottom: 0;
    color: ${({ theme }) => theme.text1};
  }
  .achieve-item-sub-title {
    margin-top: 24px;
    font-size: 22px;
    color: ${({ theme }) => theme.text2};
  }
  // :hover {
  //   .achieve-circle {
  //     background-color: ${({ theme }) => theme.background4};
  //   }
  //   .achieve-item-title {
  //     color: ${({ theme }) => theme.white};
  //   }
  //   .achieve-item-sub-title {
  //     color: ${({ theme }) => theme.text1};
  //   }
  // }
  .wrap-item {
  }

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
          .ant-card-body {
            padding: 0px;
          }
          .achieve-item-title {
            font-size: 24px;
          }
          .achieve-circle {
            width: 150px;
            height: 150px;
          }
          .achieve-item-title {
            font-size: 34px;
          }
          .achieve-item-sub-title {
            font-size: 16px;
          }
    `}
`;

const MarketAchieve = () => {
  const marketTrs = useSelector(marketTranslateSelector);

  const Factory = React.useMemo(
    () => [
      {
        title: '$550M',
        content: marketTrs.volumeTraded,
        className: 'achieve-margin-right',
      },
      {
        title: '1M',
        content: marketTrs.anonymousTrades,
        className: 'achieve-margin-right',
      },
      {
        title: '101',
        content: marketTrs.privateCryptocurrencies,
        className: 'achieve-margin-right',
      },
      { title: '11', content: marketTrs.bridgedBlockchains },
    ],
    [marketTrs],
  );

  const renderItem = (item: any) => (
    <Card style={{ minWidth: isMobile ? 0 : 300 }} className="wrap-item">
      <Item className="achieve-margin-right">
        <div className={`achieve-circle`}>
          <p className="achieve-item-title">{item.title}</p>
        </div>
        <p className="text-align-center fw-medium achieve-item-sub-title">
          {item.content}
        </p>
      </Item>
    </Card>
  );
  return (
    <Styled className="default-padding-horizontal default-padding-vertical default-margin-top background2">
      <p className="main-title-text achieve-title">{marketTrs.privacyMarketplace}</p>
      <p className="sub-title-text text2 sub-title-text achieve-sub-title">
        {marketTrs.inCogIsNone}
      </p>
      <Row className="achieve-wrap">
        <Col xs={24}>
          <List
            grid={{
              xs: 2,
              sm: 2,
              md: 2,
              lg: 2,
              xl: 4,
              xxl: 4,
            }}
            style={{ marginLeft: 12 }}
            dataSource={Factory}
            renderItem={renderItem}
          />
        </Col>
      </Row>
    </Styled>
  );
};

export default React.memo(MarketAchieve);
