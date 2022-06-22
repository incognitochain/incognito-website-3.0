import { memo } from 'react';
import styled from 'styled-components';
export const Styled = styled.div`
  height: 140px;
`;

const SpaceView = () => {
  return <Styled />;
};

export default memo(SpaceView);
