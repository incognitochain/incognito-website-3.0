import styled, { ITheme } from 'styled-components';

export const Styled = styled.div`
  padding-bottom: 40px;
  .section-1 {
    padding-top: 120px;
    justify-content: space-between;
    .title {
      font-size: 64px;
      white-space: pre-wrap;
      line-height: 70px;
      font-weight: 500;
      letter-spacing: 0.015em;
    }
    .sub-title {
      margin-top: 24px;
      white-space: pre-wrap;
    }
    .btn-how-work {
      margin-top: 40px;
      width: 148px;
    }
    ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToLarge`
      .btn-how-work {
        margin-top: 40px;
        height: 50px
        font-size: 18px;
      }
  `}
    ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-start;
        padding-top: 40px;
        .title {
          text-align: left;
          font-size: 34px;
          line-height: 44px;
          margin-top: 24px;
        }
        .sub-title {
          text-align: left;
          font-size: 16px;
          line-height: 24px;
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
    margin-top: 120px;
  }
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToSupperLarge`
    .cake-img {
        width: 35%;
        object-fit: contain;
    }
  `}
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
    .cake-img {
        width: 85%;
        object-fit: contain;
        margin-top: 0px;
        margin: auto;
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
    ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToLarge`
      .btn-how-work {
        margin-top: 50px;
      }
  `}
    ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        margin-top: 40px;
        padding-bottom: 20px;
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
          height: 50px;        
        }
        .sub-title {
          font-size: 16px;
          line-height: 24px;
          text-align: center;
          margin-top: 4px;
        }
    `}
  }
`;
