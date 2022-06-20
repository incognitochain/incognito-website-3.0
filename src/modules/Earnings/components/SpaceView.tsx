import SectionHead from '@components/SectionHead';
import phoneTransactionHistory from '@images/phone-transaciton-history.png';
import animationData from '@src/assets/hexagon-animation.json';
import { Button, Col, Row } from 'antd';
import { memo } from 'react';
import Lottie from 'react-lottie';
import styled, { ITheme } from 'styled-components';
export const Styled = styled.div`
  height: 140px;
`;

const SpaceView = () => {
  return <Styled />;
};

export default memo(SpaceView);
