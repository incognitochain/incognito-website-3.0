import styled, { ITheme } from 'styled-components';

export const Styled = styled.div<{ isMobile: boolean }>`
  height: 100px;
  .market-header {
    padding-top: 87px;
    padding-bottom: 87px;
    padding-left: ${({ isMobile }) => isMobile && 0};
    padding-right: ${({ isMobile }) => isMobile && 0};
  }
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
      .market-header {
        padding-top: 48px;
        padding-bottom: 40px;
      }
    `}
`;
