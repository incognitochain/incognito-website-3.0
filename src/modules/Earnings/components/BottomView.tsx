import SectionHead from '@components/SectionHead';
import phoneTransactionHistory from '@images/phone-transaciton-history.png';
import animationData from '@src/assets/hexagon-animation.json';
import { Button, Col, Row } from 'antd';
import { memo } from 'react';
import Lottie from 'react-lottie';

import { Styled } from './BottomView.styled';
import HexagonAnimation from './HexagonAnimation';

const BottomView = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Styled>
      <div className="row">
        <div className="right">
          <div className="row-section-head">
            <SectionHead title="Privacy Exchange" className="section-head" />
            <div className="space" />
            <SectionHead title="Cross-chain" className="section-head" />
            <div className="space" />
            <SectionHead title="Permissionless" className="section-head" />
          </div>
          <p className="title fw-medium main-title-text">
            Become a Liquidity Provider for DEX
          </p>
          <p className="text2 sub-title sub-title-text description">
            A liquidity pool is used to facilitate trades between the assets on a
            decentralized exchange. Contribute liquidity and earn rewards for helping
            people trade anonymously.
          </p>

          <div className="row-button">
            <Button
              type="primary"
              shape="round"
              size="large"
              className="button1 btn-become-validator"
              onClick={() => {
                console.log(' Provide now TO DO ');
                // window.open(
                //   'https://we.incognito.org/t/how-to-setup-your-own-node-in-a-blink-of-an-eye-now-support-multi-nodes-per-host/12003',
                //   '_blank',
                // );
              }}>
              {'Provide now'}
            </Button>

            <button
              onClick={() => {
                console.log(' More detail TO DO ');
              }}>
              <p className="more-detail-title">More detail</p>
            </button>
          </div>
        </div>
        <div className="left">
          <div className="animation-container">
            <HexagonAnimation />
          </div>
          <img className="image-container" src={phoneTransactionHistory} alt="" />
        </div>

        <div className="space" />
      </div>
    </Styled>
  );
};

export default BottomView;
