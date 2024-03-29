import SectionHead from '@components/SectionHead';
import SectionLink from '@components/SectionLink';
import cakeImg from '@images/cake-logo.png';
import PeggingListApps from '@modules/PeggingApp/features/PeggingApp.apps';
import PeggingCategory from '@modules/PeggingApp/features/PeggingApp.category';
import { peggingAppTranslateSelector } from '@src/configs';
import { Button, Col, Row } from 'antd';
import React, { memo } from 'react';
import { isMobile } from 'react-device-detect';
import { useSelector } from 'react-redux';

import { Styled } from './PeggingApp.styled';

const renderSectionBottom = () => {
  const peggingTrs = useSelector(peggingAppTranslateSelector);
  return (
    <div className="default-padding-horizontal default-margin-top">
      <PeggingCategory />
      <div className="section-2 default-margin-top">
        <h1 className="title">{peggingTrs.privacyApp}</h1>
        {/*<p className="text3 fw-medium sub-title">{peggingTrs.coming}</p>*/}
      </div>
      <PeggingListApps />
    </div>
  );
};

const Home = () => {
  const peggingTrs = useSelector(peggingAppTranslateSelector);
  return (
    <Styled>
      <div className="section-1 default-padding-horizontal default-margin-top">
        <Col style={{ flexDirection: 'column' }}>
          <SectionHead title="Privacy apps" className="section-head" />
          <p className="fw-medium main-title-text title">{peggingTrs.mainTitle}</p>
          <p className="text2 sub-title sub-title-text">
            {isMobile
              ? `Get privacy for any decentralized application on Ethereum, Binance Smart Chain and Polygon. Solana and Fantom coming soon.`
              : `Get privacy for any decentralized application on Ethereum, \nBinance Smart Chain and Polygon. Solana and Fantom coming soon.`}
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
          <SectionLink
            title="Want privacy for your app?"
            subTitle="Try it out"
            link="https://we.incognito.org/t/how-to-trade-with-ppancake/15567"
          />
        </Col>
        <img src={cakeImg} alt="cake-logo" className="cake-img" />
      </div>
      {renderSectionBottom()}
    </Styled>
  );
};

export default memo(Home);
