import { darkTheme } from '@theme/index';
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
  upToMedium: 960,
  upToLarge: 1280,
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
  return darkTheme();
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
    
    // background
    .background1 {
      background-color: ${({ theme }) => theme.background1}
    }
    .background2 {
      background-color: ${({ theme }) => theme.background2}
    }
`;
