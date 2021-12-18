import cakeImg from '@images/cake-logo.png';
import PeggingListApps from '@modules/PeggingApp/features/PeggingApp.apps';
import PeggingCategory from '@modules/PeggingApp/features/PeggingApp.category';
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
        className="section-1 default-padding-horizontal">
        <Row style={{ flexDirection: 'column' }}>
          <p className="fw-medium title">{peggingTrs.mainTitle}</p>
          <p className="text2 fs-supermedium sub-title">
            {`Get privacy for any decentralized application on Ethereum, \nBinance Smart Chain, Polygon, and Solana.⁤`}
          </p>
          <Button
            type="primary"
            shape="round"
            size="large"
            className="button1 btn-how-work"
            onClick={() => {
              window.open(
                'https://we.incognito.org/t/pethereum-specifications/1688',
                '_blank',
              );
            }}>
            {peggingTrs.howWork}
          </Button>
        </Row>
        <img src={cakeImg} alt="cake-logo" className="cake-img" />
      </Row>
      <div className="default-padding-horizontal wrap-content">
        <PeggingCategory />
        <div className="section-2">
          <p className="fw-medium title">{peggingTrs.privacyApp}</p>
          <p className="text3 fw-medium sub-title">{peggingTrs.coming}</p>
        </div>
        <PeggingListApps />
      </div>
    </Styled>
  );
};

export default memo(Home);
