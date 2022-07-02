import { black, white } from '@theme/Theme';
import { Colors } from '@theme/Theme.styled';

const darkTheme = (): Colors => {
  return {
    // base
    white,
    black,

    // background
    background1: '#1A1A1A',
    background2: '#303030',
    background3: '#1A1A1A',
    background4: '#1A73E8',

    text1: white,
    text2: '#9C9C9C',
    text3: '#1A73E8',
    text4: '#6BA0FB',
    text5: '#757575',

    // border
    border1: 'rgba(54, 54, 54, 0.5)',

    // btn
    btnBG1: '#1A73E8',

    green1: '#21A465',
    red1: '#D13D49',

    color_white: '#FFFFFF',
    color_dark: '#000000',
    color_grey: '#9C9C9C',
    color_grey1: '#303030',
    color_grey2: '#252525',
    color_blue: '#1A73E8',
    color_black1: '#191919',
    color_black2: '#1A1A1A',
  };
};

export default darkTheme;
