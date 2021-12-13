import { FlattenSimpleInterpolation, ThemedCssFunction } from 'styled-components';

export type Color = string;
export interface Colors {
  // base
  white: Color;
  black: Color;

  // background
  background1: Color;
  background2: Color;
  background3: Color;
  background4: Color;

  // text
  text1: Color;
  text2: Color;
  text3: Color;
  text4: Color;

  border1: Color;

  btnBG1: Color;

  green1: Color;
  red1: Color;
}

export interface Grids {
  sm: number;
  md: number;
  lg: number;
}

declare module 'styled-components' {
  export interface ITheme extends Colors {
    grids: Grids;

    // media queries
    mediaWidth: {
      upToExtraSmall: ThemedCssFunction<ITheme>;
      upToSmall: ThemedCssFunction<ITheme>;
      upToMedium: ThemedCssFunction<ITheme>;
      upToLarge: ThemedCssFunction<ITheme>;
      upToSupperLarge: ThemedCssFunction<ITheme>;
    };

    // css snippets
    flexColumnNoWrap: FlattenSimpleInterpolation;
    flexRowNoWrap: FlattenSimpleInterpolation;
  }
}
