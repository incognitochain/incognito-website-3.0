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
      font-weight: 500;
      letter-spacing: 0.015em;
    }
    .btn-how-work {
      margin-top: 90px;
      width: 148px;
    }
    ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToLarge`
      .btn-how-work {
        margin-top: 50px;
        height: 50px
        font-size: 18px;
      }
  `}
    ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        display: flex;
        flex-direction: column-reverse;
        .title {
          text-align: left;
          font-size: 34px;
          line-height: 44px;
          margin-top: 24px;
        }
        .btn-how-work {
          margin-top: 24px;
        }
    `}
  }
  .cake-img {
    width: 45%;
    object-fit: contain;
  }
  .wrap-content {
    margin-top: 100px;
  }
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToSupperLarge`
    .cake-img {
        width: 35%;
        object-fit: contain;
    }
  `}
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
    .cake-img {
        width: 100%;
        object-fit: contain;
        margin-top: 0px;
    }
    .wrap-content {
      margin-top: 40px;
    }
  `}

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
        margin-top: 40px;
        justify-content: center;
        .title {
          text-align: center;
          width: 100%;
          font-size: 34px;
          line-height: 44px;
        }
        .btn-how-work {
          margin: auto;
          margin-top: 50px;
        }
        .sub-title {
          font-size: 16px;
          line-height: 24px;
          text-align: center;
          margin-top: 2px;
        }
    `}
  }
`;
