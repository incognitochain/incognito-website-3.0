import cakeImg from '@images/cake-logo.png';
import { peggingAppTranslateSelector } from '@src/configs';
import { Button, Col, Row } from 'antd';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { Styled } from './PeggingApp.styled';

const Home = () => {
  const peggingTrs = useSelector(peggingAppTranslateSelector);
  return (
    <Styled>
      <Row
        align="middle"
        justify="space-between"
        className="section-1 background2 default-padding-horizontal">
        <Row style={{ flexDirection: 'column' }}>
          <p className="title fw-medium">{peggingTrs.mainTitle}</p>
          <Button
            type="primary"
            shape="round"
            size="large"
            className="button1 btn-how-work">
            {peggingTrs.howWork}
          </Button>
        </Row>
        <img src={cakeImg} alt="cake-logo" className="cake-img" />
      </Row>
    </Styled>
  );
};

export default memo(Home);
