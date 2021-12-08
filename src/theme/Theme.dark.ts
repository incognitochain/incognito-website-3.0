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

    text1: white,
    text2: '#9C9C9C',
  };
};

export default darkTheme;
