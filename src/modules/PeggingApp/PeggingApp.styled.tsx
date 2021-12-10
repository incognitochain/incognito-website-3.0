import styled, { ITheme } from 'styled-components';

export const Styled = styled.div`
  .section-1 {
    padding-top: 50px;
    padding-bottom: 50px;
    justify-content: space-between;
    .title {
      font-size: 64px;
      white-space: pre-wrap;
      line-height: 70px;
      letter-spacing: 0.015em;
    }
    .btn-how-work {
      margin-top: 90px;
      width: 148px;
    }
    ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToLarge`
      .btn-how-work {
        margin-top: 50px;
      }
  `}
    ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        justify-content: center;
        .title {
          text-align: center;
        }
        .btn-how-work {
          margin: auto;
          margin-top: 50px;
        }
    `}
  }
  .cake-img {
    width: 45%;
    object-fit: contain;
  }
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToSupperLarge`
    .cake-img {
        width: 35%;
        object-fit: contain;
    }
  `}
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
    .cake-img {
        width: 80%;
        object-fit: contain;
        margin-top: 50px;
    }
  `}
  .wrap-content {
    margin-top: 100px;
  }

  .section-2 {
    margin-top: 100px;
    justify-content: space-between;
    .title {
      font-size: 64px;
      white-space: pre-wrap;
      line-height: 70px;
      letter-spacing: 0.015em;
      text-align: center;
    }
    .sub-title {
      margin-top: 16px;
      font-weight: 500;
      font-size: 22px;
      line-height: 33px;
      letter-spacing: 0.02em;
      text-align: center;
    }
    .btn-how-work {
      margin-top: 90px;
      width: 148px;
    }
    ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToLarge`
      .btn-how-work {
        margin-top: 50px;
      }
  `}
    ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        justify-content: center;
        .title {
          text-align: center;
        }
        .btn-how-work {
          margin: auto;
          margin-top: 50px;
        }
    `}
  }
`;
