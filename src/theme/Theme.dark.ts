import { black, white } from '@theme/Theme';
import { Colors } from '@theme/Theme.styled';

const darkTheme = (): Colors => {
  return {
    // base
    white,
    black,

    // background
    background1: black,
    background2: '#303030',
    background3: '#1A1A1A',
    background4: '#1A73E8',

    text1: white,
    text2: '#9C9C9C',
    text3: '#1A73E8',

    // border
    border1: '#484848',

    // btn
    btnBG1: '#1A73E8',
  };
};

export default darkTheme;
