import styled, { ITheme } from 'styled-components';

export const Styled = styled.div<{ isMobile: boolean }>`
  .market-header {
    padding-top: 120px;
    padding-bottom: 120px;
    padding-left: ${({ isMobile }) => isMobile && 200};
    padding-right: ${({ isMobile }) => isMobile && 200};
  }

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToLarge`
      .market-header {
        padding-top: 80px;
        padding-bottom: 80px;
      }
  `}
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
      .market-header {
        padding-top: 48px;
        padding-bottom: 40px;
      }
    `}
`;
