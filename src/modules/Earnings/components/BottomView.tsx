import SectionHead from '@components/SectionHead';
import phoneIncognitoValidator from '@images/phone-incognito-validator.png';
import phoneTokenList from '@images/phone-token-list.png';
import { Button, Col, Row } from 'antd';

import { Styled } from './BottomView.styled';
import HexagonAnimation from './HexagonAnimation';

const BottomView = () => {
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
        <div className="space" />
        <div className="left">
          <div className="animation-container">
            <HexagonAnimation />
          </div>
          <div className="image-wrapper">
            <img
              className="image-container"
              src={phoneTokenList}
              alt="phone-token-list"
            />
            <img
              className="image-container-1"
              src={phoneIncognitoValidator}
              alt="phone-incognito-validator"
            />
          </div>
        </div>
      </div>
    </Styled>
  );
};

export default BottomView;
