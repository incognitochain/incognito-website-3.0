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
    width: 45%;
    max-width: 650px;
  }
  .btn-become-validator {
    margin-top: 50px;
    width: 196px;
  }
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToLarge`
      .logo-stroke {
        width: 35%;
        max-width: 500px;
      }
  `}
  .col-section1 {
    display: flex;
    flex-direction: column;
  }
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
      justify-content: center;
      .col-section1 {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .main-title {
        text-align: center;
      }
      .sub-main-title {
        text-align: center;
      }
      .btn-become-validator {
        margin: auto;
        margin-top: 50px;
        margin-bottom: 50px;
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
          className="button1 btn-become-validator">
          {structureTrs.becomeValidator}
        </Button>
      </Col>
      <img src={logoStrokeImg} className="logo-stroke" alt="logo-stroke" />
    </Styled>
  );
};

export default React.memo(Section1);
