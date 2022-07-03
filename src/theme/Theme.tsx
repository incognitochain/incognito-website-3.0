import { darkTheme, lightTheme } from '@theme/index';
import { FONTS } from '@theme/Theme.fonts';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  createGlobalStyle,
  css,
  ITheme,
  ThemeProvider as StyledComponentsThemeProvider,
} from 'styled-components';

import { darkModeSelector } from './Theme.selector';
import { Colors } from './Theme.styled';

const MEDIA_WIDTHS = {
  upToExtraSmall: 500,
  upToSmall: 720,
  upToMedium: 1200,
  upToLarge: 1440,
  upToSupperLarge: 1920,
};

const mediaWidthTemplates: { [width in keyof typeof MEDIA_WIDTHS]: typeof css } =
  Object.keys(MEDIA_WIDTHS).reduce((accumulator, size) => {
    (accumulator as any)[size] = (a: any, b: any, c: any) => css`
      @media (max-width: ${(MEDIA_WIDTHS as any)[size]}px) {
        ${css(a, b, c)}
      }
    `;
    return accumulator;
  }, {}) as any;

export const white = '#FFFFFF';
export const black = '#000000';

export function colors(darkMode: boolean): Colors {
  if (darkMode) return darkTheme();
  return lightTheme();
}

export function appTheme(darkMode: boolean): ITheme {
  return {
    ...colors(darkMode),

    grids: {
      sm: 8,
      md: 12,
      lg: 24,
    },

    // media queries
    mediaWidth: mediaWidthTemplates,

    // css snippets
    flexColumnNoWrap: css`
      display: flex;
      flex-flow: column nowrap;
    `,
    flexRowNoWrap: css`
      display: flex;
      flex-flow: row nowrap;
    `,
  };
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const darkMode = useSelector(darkModeSelector);

  const themeObject = useMemo(() => appTheme(darkMode), [darkMode]);

  return (
    <StyledComponentsThemeProvider theme={themeObject}>
      {children}
    </StyledComponentsThemeProvider>
  );
};

export const ThemedGlobalStyle = createGlobalStyle`
    body {
      min-height: 100vh;
      box-sizing: border-box;
      background: ${({ theme }: { theme: ITheme }) => theme.background1};
    }
    @font-face {
      font-family: SF-Pro-Regular;
      src: url('../assets/fonts/SF-Pro-Display/SF-Pro-Display-Bold.otf');
      font-style: normal;
      font-display: swap;
      font-weight: 400;
    }

    @font-face {
      font-family: SF-Pro-Medium;
      src: url('../assets/fonts/SF-Pro-Display/SF-Pro-Display-Medium.otf');
      font-style: normal;
      font-display: swap;
      font-weight: 500;
    }

    @font-face {
      font-family: SF-Pro-Bold;
      src: url('../assets/fonts/SF-Pro-Display/SF-Pro-Display-Regular.otf');
      font-style: normal;
      font-display: swap;
      font-weight: 700;
    }
    .fw-regular {
        font-weight: 400;
    }

    .fw-medium {
        font-weight: 500;
    }

    .fw-light {
        font-weight: 200;
    }

    .fw-suppermedium {
        font-weight: 600;
    }

    .fw-bold {
        font-weight: 700;
    }

    .fs-suppersmall {
        font-size: ${FONTS.SIZE.superSmall}px;
        line-height: ${FONTS.SIZE.superSmall + 7}px;
    }

    .fs-small {
        font-size: ${FONTS.SIZE.small}px;
        line-height: ${FONTS.SIZE.small + 7}px;
    }

    .fs-regular {
        font-size: ${FONTS.SIZE.regular}px;
        line-height: ${FONTS.SIZE.regular + 7}px;
    }

    .fs-medium {
        font-size: ${FONTS.SIZE.medium}px;
        line-height: ${FONTS.SIZE.medium + 7}px;
    }

    .fs-supermedium {
        font-size: ${FONTS.SIZE.superMedium}px;
        line-height: ${FONTS.SIZE.superMedium + 7}px;
    }

    .fs-large {
        font-size: ${FONTS.SIZE.large}px;
        line-height: ${FONTS.SIZE.large + 7}px;
    }

    .fs-avglarge {
        font-size: ${FONTS.SIZE.avgLarge}px;
        line-height: ${FONTS.SIZE.avgLarge + 7}px;
    }

    .fs-verylarge {
        font-size: ${FONTS.SIZE.veryLarge}px;
        line-height: ${FONTS.SIZE.veryLarge + 7}px;
    }

    .fs-superlarge {
        font-size: ${FONTS.SIZE.superLarge}px;
        line-height: ${FONTS.SIZE.superLarge + 7}px;
    }

    ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        .fs-superlarge {
            font-size: ${FONTS.SIZE.veryLarge}px;
            line-height: ${FONTS.SIZE.veryLarge + 7}px;
        }
    `}
    
    .center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
  
    .row {
        display: flex;
        flex-direction: row;
    }
    .disable-pointer {
        cursor: default;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .text-align-left {
      text-align: left;
    }

    .text-align-right {
      text-align: right;
    }
    .text-align-left {
      text-align: left;
    }

    .text-align-center {
      text-align: center;
    }
    
    p {
      color: ${({ theme }) => theme.text1}
    }

    div {
      color: ${({ theme }) => theme.background1}
    }
    
    // text
    .text1 {
      color: ${({ theme }) => theme.text1}
    }
    .text2 {
      color: ${({ theme }) => theme.text2}
    }
    .text3 {
      color: ${({ theme }) => theme.text3}
    }
    .text4 {
      color: ${({ theme }) => theme.text4}
    }
    .text5 {
      color: ${({ theme }) => theme.text5}
    }

    // background
    .background1 {
      background-color: ${({ theme }) => theme.background1}
    }
    .background2 {
      background-color: ${({ theme }) => theme.background2}
    }

    .ant-card {
      background: transparent;
    }
    .ant-card-bordered {
      border: none;
    }
    
    .default-padding-horizontal {
      padding-left: 200px;
      padding-right: 200px;
    }

    .ant-btn-round.ant-btn-lg {
      height: 60px;
      font-size: 18px;
      font-weight: 500;
      letter-spacing: 0;
      text-align: center;
      border: none;
      border-radius: 8px;
    }
    
    .button1 {
      background-color: ${({ theme }) => theme.btnBG1};
    }

    ::-webkit-scrollbar {
      width: 15px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
       background: ${({ theme }) => theme.background2};
       border-radius: 10px;
       border: 2px solid ${({ theme }) => theme.background1};
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.background2};;
    }
    .ant-tooltip-inner {
      background: ${({ theme }) => theme.background2};;
    }
    .border-bottom {
      border-bottom: 1px solid ${({ theme }) => theme.border1};
    }
    .sub-title-text {
      font-size: 22px;
      line-height: 33px;
      letter-spacing: 0.01em;
      white-space: pre-wrap;
      margin-top: 24px;
    }
    .special-main-title-text {
      white-space: pre-wrap;
      font-size: 76px;
      line-height: 82px;
      font-weight: 500;
    }
    .main-title-text {
      white-space: pre-wrap;
      font-size: 64px;
      line-height: 70px;
      font-weight: 500;
    }
    .default-padding-vertical {
      padding-top: 120px;
      padding-bottom: 120px;
    }
    .default-margin-top {
      margin-top: 120px;
    }
    .default-margin-bottom {
      margin-bottom: 120px;
    }
    .ant-btn-round.ant-btn-lg {
      height: 60px;
    }

    /* .description {
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0.01em;
      white-space: pre-wrap;
      color: #757575;
    } */

    .header {
      color: ${({ theme }) => theme.color_white};
      ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToSupperLarge`
        font-size: 64px;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.005em;
      `}
      ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToLarge`
        font-size: 48px;
        font-weight: 500;
        line-height: 120%;
      `}
      ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        font-size: 34px;
        font-weight: 500;
        line-height: 124%;
      `}
    }


    .header1 {
      color: ${({ theme }) => theme.color_white};
      ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToSupperLarge`
        font-size: 28px;
        font-weight: 500;
        line-height: 140%;
      `}
      ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToLarge`
        font-size: 24px;
        font-weight: 500;
        line-height: 132%;
      `}
      ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        font-size: 20px;
        font-weight: 500;
        line-height: 124%;
        letter-spacing: -0.02em;
      `}
    }

    .header2 {
      color: ${({ theme }) => theme.color_white};
      ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToSupperLarge`
        font-size: 24px;
        font-weight: 500;
        line-height: 140%;
      `}
      ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToLarge`
        font-size: 20px;
        font-weight: 500;
        line-height: 120%;
      `}
      ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        font-size: 20px;
        font-weight: 500;
        line-height: 124%;
      `}
    }

    
      
    .description {
      color: ${({ theme }) => theme.color_grey};
      ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToSupperLarge`
        font-size: 20px;
        font-weight: 400;
        line-height: 140%;
        letter-spacing: 0.005em;
      `}
      ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToLarge`
        font-size: 18px;
        font-weight: 400;
        line-height: 140%;
      `}
      ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        font-size: 16px;
        font-weight: 400;
        line-height: 140%;
      `}
    }

    .description2 {
      color: ${({ theme }) => theme.color_grey4};
      ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToSupperLarge`
        font-size: 16px;
        font-weight: 400;
        line-height: 140%;
        letter-spacing: 0.005em;
      `}
      ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToLarge`
        font-size: 14px;
        font-weight: 400;
        line-height: 140%;
      `}
      ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        font-size: 14px;
        font-weight: 400;
        line-height: 140%;
      `}
    }


    
    ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToLarge`
        .default-padding-horizontal {
          padding-left: 105px;
          padding-right: 105px;
        }
        .sub-title-text {
          font-size: 18px;
          line-height: 27px;
          letter-spacing: 0.01em;
          margin-top: 16px;
        }
        .special-main-title-text {
          white-space: pre-wrap;
          font-weight: 500;
          font-size: 48px;
          line-height: 54px;
          letter-spacing: 0.01em;
        }
        .main-title-text {
          white-space: pre-wrap;
          font-weight: 500;
          font-size: 48px;
          line-height: 54px;
          letter-spacing: 0.01em;
        }
        .default-padding-vertical {
          padding-top: 100px;
          padding-bottom: 100px;
        }
        .default-margin-top {
          margin-top: 100px;
        }
        .default-margin-bottom {
          margin-bottom: 100px;
        }
        .ant-btn-round.ant-btn-lg {
          height: 50px;
        }
  `}
    ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        .default-padding-horizontal {
          padding-left: 16px;
          padding-right: 16px;
        }
        .sub-title-text {
          font-size: 16px;
          line-height: 24px;
          letter-spacing: 0.01em;
          white-space: initial;
          margin-top: 16px;
        }
        .special-main-title-text {
          white-space: initial;
          font-weight: 500;
          font-size: 34px;
          line-height: 44px;
          letter-spacing: 0.01em;
        }
        .main-title-text {
          white-space: initial;
          font-weight: 500;
          font-size: 28px;
          line-height: 38px;
          letter-spacing: 0.01em;
        }
        .default-padding-vertical {
          padding-top: 40px;
          padding-bottom: 40px;
        }
        .default-margin-top {
          margin-top: 40px;
        }
        .default-margin-bottom {
          margin-bottom: 40px;
        }
        .ant-btn-round.ant-btn-lg {
          height: 50px;
        }
    `}

    // Colors global
    .color-white {
      color: ${({ theme }) => theme.color_white}
    }
    .color-dark {
      color: ${({ theme }) => theme.color_dark}
    }
    .color_grey {
      color: ${({ theme }) => theme.color_grey}
    }
    .color_grey1 {
      color: ${({ theme }) => theme.color_grey1}
    }
    .color_grey2 {
      color: ${({ theme }) => theme.color_grey2}
    }
    .color_grey3 {
      color: ${({ theme }) => theme.color_grey3}
    }
    .color_grey4 {
      color: ${({ theme }) => theme.color_grey4}
    }
    .color_blue {
      color: ${({ theme }) => theme.color_blue}
    }
    .color_black1 {
      color: ${({ theme }) => theme.color_black1}
    }
    .color_black1 {
      color: ${({ theme }) => theme.color_black2}
    }

    .hover-opacity {
      :hover {
        cursor: pointer;
        opacity: 0.6;
      }
    }

    .text-center {
      text-align: center
    }

    .text-left {
      text-align: left
    }

    //Header Global
    h1 {
      color: ${({ theme }) => theme.color_white};
      ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToSupperLarge`
        font-size: 64px;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.005em;
      `}
      ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToLarge`
        font-size: 48px;
        font-weight: 500;
        line-height: 120%;
      `}
      ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        font-size: 34px;
        font-weight: 500;
        line-height: 124%;
      `}
    }

    h4 {
      color: ${({ theme }) => theme.color_white};
      ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToSupperLarge`
        font-size: 28px;
        font-weight: 500;
        line-height: 140%;
      `}
      ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToLarge`
        font-size: 24px;
        font-weight: 500;
        line-height: 132%;
      `}
      ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        font-size: 20px;
        font-weight: 500;
        line-height: 124%;
        letter-spacing: -0.02em;
      `}
    }

    h5 {
      color: ${({ theme }) => theme.color_white};
      ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToSupperLarge`
        font-size: 24px;
        font-weight: 500;
        line-height: 140%;
      `}
      ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToLarge`
        font-size: 20px;
        font-weight: 500;
        line-height: 120%;
      `}
      ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        font-size: 20px;
        font-weight: 500;
        line-height: 124%;
      `}
    }

    h6 {
      color: ${({ theme }) => theme.color_grey};
      ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToSupperLarge`
        font-size: 20px;
        font-weight: 400;
        line-height: 140%;
        letter-spacing: 0.005em;
      `}
      ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToLarge`
        font-size: 18px;
        font-weight: 400;
        line-height: 140%;
      `}
      ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        font-size: 16px;
        font-weight: 400;
        line-height: 140%;
      `}
    }

`;
