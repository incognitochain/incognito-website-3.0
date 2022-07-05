import styled, { ITheme } from 'styled-components';

export const Styled = styled.div`
  padding-bottom: 40px;
  .section-1 {
    justify-content: space-between;
    .title {
      white-space: pre-wrap;
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
        .title {
          text-align: left;
          font-size: 34px;
          line-height: 44px;
          margin-top: 16px;
        }
        .sub-title {
          text-align: left;
          font-size: 16px;
          line-height: 24px;
        }
        .btn-how-work {
          margin-top: 16px;
        }
        .section-head {
            margin-bottom: 0px;
            margin-top: 40px;
        }
    `}
  }
  .cake-img {
    width: 45%;
    object-fit: contain;
    max-width: 420px;
  }

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToLarge`
    .cake-img {
        max-width: 370px;
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
  `}

  .section-2 {
    justify-content: space-between;
    .title {
      white-space: pre-wrap;
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
        padding-bottom: 20px;
        justify-content: center;
        .title {
          text-align: center;
          width: 100%;
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
