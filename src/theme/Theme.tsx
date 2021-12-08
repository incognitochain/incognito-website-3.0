import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Text, TextProps } from 'rebass';
import styled, {
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

const white = '#FFFFFF';
const black = '#000000';

export function colors(darkMode: boolean): Colors {
  return {
    // base
    white,
    black,
  };
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
`;
