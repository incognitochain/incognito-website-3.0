import MarketBanner from '@modules/Market/features/Market.banner';
import React, { memo } from 'react';

import { Styled } from './Market.styled';

const Home = () => {
  return (
    <Styled>
      <MarketBanner />
    </Styled>
  );
};

export default memo(Home);
