import { memo } from 'react';
import styled, { ITheme } from 'styled-components';
export const Styled = styled.div`
  height: 140px;

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
     height: 100px;
  `}

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToSmall`
      height: 60px;
  `};
`;

const SpaceView = () => {
  return <Styled />;
};

export default memo(SpaceView);
