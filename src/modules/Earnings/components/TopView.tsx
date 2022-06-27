import SectionHead from '@components/SectionHead';
import phoneIncognitoValidator from '@images/phone-incognito-validator.png';
import phoneTransactionHistory from '@images/phone-transaciton-history.png';
import { route as ValidatorRoute } from '@modules/Earnings/features/Validators/Validators.route';
import animationData from '@src/assets/hexagon-animation.json';
import { Button } from 'antd';
import { memo } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import HexagonAnimation from './HexagonAnimation';
import { Styled } from './TopView.styled';
const TopView = () => {
  const history = useHistory();
  return (
    <Styled>
      <div className="row">
        <div className="left">
          <div className="animation-container">
            <HexagonAnimation />
          </div>

          <div className="image-wrapper">
            <img
              className="image-container"
              src={phoneTransactionHistory}
              alt="phone-transaction-history"
            />
            <img
              className="image-container-1"
              src={phoneIncognitoValidator}
              alt="phone-incognito-validator"
            />
          </div>
        </div>

        <div className="space" />

        <div className="right">
          <div className="row-section-head">
            <SectionHead title="Secure the network" className="section-head" />
            <div className="space" />
            <SectionHead title="earn profit" className="section-head" />
          </div>
          <p className="title fw-medium main-title-text">Become a Validator</p>
          <p className="text2 sub-title sub-title-text description">
            Incognito is a community-driven privacy project powered by thousands of
            decentralized validators.
          </p>

          <div className="row-button">
            <Button
              type="primary"
              shape="round"
              size="large"
              className="button1 btn-become-validator"
              onClick={() => {
                console.log(' Stake now TO DO ');
                history.push({
                  pathname: ValidatorRoute,
                  state: {
                    activeScroll: true,
                  },
                });
              }}>
              {'Stake now'}
            </Button>

            <button
              onClick={() => {
                console.log(' More detail TO DO ');
                history.push(ValidatorRoute);
              }}>
              <p className="more-detail-title">More detail</p>
            </button>
          </div>
        </div>
      </div>
    </Styled>
  );
};

export default memo(TopView);
