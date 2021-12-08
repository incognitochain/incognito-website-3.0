import styled, { ITheme } from 'styled-components';

export const Styled = styled.div`
  height: 100px;
  .wrap-content {
    margin-left: 140px;
    margin-right: 140px;
    margin-top: 168px;
  }
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        .wrap-content {
            margin-top: 24px;
            margin-left: 24px;
            margin-right: 24px;        
        }
    `}
`;
