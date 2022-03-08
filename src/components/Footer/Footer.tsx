import { Styled } from '@components/Footer/Footer.styled';
import { route as PolicyRoute } from '@modules/Policy/Policy.route';
import { route as TermRoute } from '@modules/TermOfService/TermOfService.route';
import { Col, Row } from 'antd';
import React, { memo } from 'react';

const Footer = () => {
  return (
    <Styled className="default-padding-horizontal">
      <Col>
        <p className="normal-label">© 2022 Incognito</p>
        <button
          className="term button-text"
          onClick={() => {
            window.open(TermRoute);
          }}>
          Term of service
        </button>
        <button
          className="policy button-text"
          onClick={() => {
            window.open(PolicyRoute);
          }}>
          Privacy policy
        </button>
      </Col>
      <Row className="wrap-social">
        <button
          className="normal-label button-text"
          onClick={() => {
            window.open('https://t.me/incognitochain', '_blank');
          }}>
          Telegram
        </button>
        <button
          className="normal-label twitter-text button-text"
          onClick={() => {
            window.open('https://twitter.com/IncognitoChain', '_blank');
          }}>
          Twitter
        </button>
      </Row>
    </Styled>
  );
};

export default memo(Footer);
