import { marketTranslateSelector } from '@src/configs';
import { Card, Col, List, Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import styled, { ITheme } from 'styled-components';

export const Styled = styled.div`
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 120px;
  padding-top: 120px;

  .achieve-title {
    font-weight: 500;
    font-size: 64px;
    line-height: 70px;
    white-space: pre-wrap;
    text-align: center;
  }
  .achieve-sub-title {
    font-size: 22px;
    line-height: 26px;
    text-align: center;
    white-space: pre-wrap;
    margin-top: 24px;
    font-weight: 400;
  }
  .achieve-margin-right ~ .achieve-margin-right {
    margin-left: 24px;
  }

  .achieve-wrap {
    margin-top: 80px;
  }
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
          margin-top: 40px;
          padding-top: 40px;
          padding-bottom: 40px;
          .achieve-title {
            font-size: 24px;
            line-height: 38px;
          }
          .achieve-sub-title {
            font-size: 16px;
            line-height: 24px;
          }
    `}
`;

const Item = styled.div`
  .achieve-circle {
    width: 240px;
    height: 240px;
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

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
          .achieve-item-title {
            font-size: 24px;
          }
          .achieve-circle {
            width: 196px;
            height: 196px;
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
        title: '73',
        content: marketTrs.privateCryptocurrencies,
        className: 'achieve-margin-right',
      },
      { title: '101', content: marketTrs.bridgedBlockchains },
    ],
    [marketTrs],
  );

  const renderItem = (item: any) => (
    <Card>
      <Item className="achieve-margin-right">
        <div className={`achieve-circle`}>
          <p className="achieve-item-title">{item.title}</p>
        </div>
        <p className="text-align-center achieve-item-sub-title">{item.content}</p>
      </Item>
    </Card>
  );
  return (
    <Styled className="default-padding-horizontal background2">
      <p className="achieve-title">{marketTrs.privacyMarketplace}</p>
      <p className="achieve-sub-title text2">{marketTrs.inCogIsNone}</p>
      <Row className="achieve-wrap">
        <Col xs={24}>
          <List
            grid={{
              xs: 1,
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
