import styled, { ITheme } from 'styled-components';

export const Styled = styled.div`
  height: 100px;
  .market-header {
    padding-top: 87px;
    padding-bottom: 87px;
  }
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
      .market-header {
        padding-top: 48px;
        padding-bottom: 40px;
      }
    `}
`;
