import { black, white } from '@theme/Theme';
import { Colors } from '@theme/Theme.styled';

const lightTheme = (): Colors => {
  return {
    // base
    white,
    black,

    // background
    background1: white,
    background2: white,
    background3: '#1A1A1A',
    background4: '#1A73E8',

    // text
    text1: black,
    text2: black,
    text3: '#1A73E8',
    text4: '#6BA0FB',
    text5: '#757575',

    // border
    border1: 'rgba(54, 54, 54, 0.5)',

    // btn
    btnBG1: '#1a73e8',
    green1: '#21A465',
    red1: '#D13D49',
  };
};

export default lightTheme;
