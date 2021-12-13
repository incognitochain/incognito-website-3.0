import styled, { ITheme } from 'styled-components';

export const Styled = styled.div`
  height: 100px;
  .wrap-content {
    margin-top: 168px;
  }
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        .wrap-content {
            margin-top: 24px;
        }
    `}
`;
