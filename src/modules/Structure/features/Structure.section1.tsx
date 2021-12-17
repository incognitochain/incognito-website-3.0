import logoStrokeImg from '@images/logo-stroke.png';
import { structureTranslateSelector } from '@src/configs';
import { Button, Col, Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import styled, { ITheme } from 'styled-components';
const Styled = styled(Row)`
  padding-top: 120px;
  padding-bottom: 120px;
  .main-title {
    font-size: 64px;
    font-weight: 500;
    line-height: 70px;
    letter-spacing: 0.015em;
    white-space: pre-wrap;
  }
  .sub-main-title {
    max-width: 620px;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.01em;
    margin-top: 40px;
  }
  .logo-stroke {
    width: 35%;
    max-width: 500px;
  }
  .btn-become-validator {
    margin-top: 50px;
    width: 196px;
  }
  .col-section1 {
    display: flex;
    flex-direction: column;
  }
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToLarge`
      .logo-stroke {
        width: 35%;
        max-width: 500px;
      }
  `}
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
      justify-content: center;
      flex-direction: column-reverse;
      padding-top: 45px;
      padding-bottom: 45px;
      .col-section1 {
        display: flex;
        flex-direction: column;
      }
      .main-title {
        font-weight: 500;
        font-size: 34px;
        line-height: 44px;
        white-space: inherit;
      }
      .sub-main-title {
        margin-top: 16px;
        font-size: 16px;
        line-height: 24px;
      }
      .btn-become-validator {
        margin-top: 24px;
        height: 50px;
        font-size: 18px;
      }
      .logo-stroke {
        width: 200px;
        height: 200px;
        margin-bottom: 45px;
      }
  `}
`;

const Section1 = () => {
  const structureTrs = useSelector(structureTranslateSelector);
  return (
    <Styled align="middle" justify="space-between" className="default-padding-horizontal">
      <Col className="col-section1">
        <p className="main-title">{structureTrs.mainTitle}</p>
        <p className="sub-main-title text2">{structureTrs.mainDesc}</p>
        <Button
          type="primary"
          shape="round"
          size="large"
          className="button1 btn-become-validator"
          onClick={() => {
            window.open(
              'https://we.incognito.org/t/how-to-setup-your-own-node-in-a-blink-of-an-eye-now-support-multi-nodes-per-host/12003',
              '_blank',
            );
          }}>
          {structureTrs.becomeValidator}
        </Button>
      </Col>
      <img src={logoStrokeImg} className="logo-stroke" alt="logo-stroke" />
    </Styled>
  );
};

export default React.memo(Section1);
