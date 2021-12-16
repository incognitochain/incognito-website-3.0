import { marketTranslateSelector } from '@src/configs';
import { Card, Col, List, Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import styled, { ITheme } from 'styled-components';

export const Styled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 50px;
  padding-top: 50px;

  .circle-title {
    font-size: 62px;
    line-height: 70px;
    white-space: pre-wrap;
    text-align: center;
  }
  .circle-margin-right ~ .circle-margin-right {
    margin-left: 24px;
  }

  .circle-wrap {
    margin-top: 80px;
  }
`;

const Item = styled.div`
  .circle-circle {
    width: 240px;
    height: 240px;
    border-radius: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background3};
    margin: auto;
  }
  .circle-item-title {
    font-size: 54px;
    line-height: 64px;
    margin-bottom: 0;
    text-align: center;
    white-space: pre-wrap;
    color: ${({ theme }) => theme.text1};
  }
  .circle-item-sub-title {
    margin-top: 24px;
    font-size: 22px;
    color: ${({ theme }) => theme.text2};
  }
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
          .circle-item-title {
            font-size: 24;
          }
          .circle-circle {
            width: 196px;
            height: 196px;
          }
          .circle-item-title {
            font-size: 34px;
          }
          .circle-item-sub-title {
            font-size: 16px;
          }
    `}
`;

const CircleList = ({ data = [], grid = {} }: { data: any[]; grid: any }) => {
  const renderItem = (item: any) => (
    <Card>
      <Item className="circle-margin-right">
        <div className={`circle-circle`}>
          <p className="circle-item-title">{item.title}</p>
        </div>
        <p className="text-align-center fw-medium circle-item-sub-title">
          {item.content}
        </p>
      </Item>
    </Card>
  );
  return (
    <Styled className="background2">
      {/*<p className="circle-title">{marketTrs.privacyMarketplace}</p>*/}
      <Row className="circle-wrap">
        <Col xs={24}>
          <List
            grid={grid}
            style={{ marginLeft: 12 }}
            dataSource={data}
            renderItem={renderItem}
          />
        </Col>
      </Row>
    </Styled>
  );
};

export default React.memo(CircleList);
