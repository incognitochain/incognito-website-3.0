import MarketAchieve from '@modules/Market/features/Market.achieve';
import MarketBanner from '@modules/Market/features/Market.banner';
import MarketCategory from '@modules/Market/features/Market.category';
import MarketTokens from '@modules/Market/features/Market.token';
import React, { memo } from 'react';

import { Styled } from './Market.styled';

const Home = () => {
  return (
    <Styled>
      <MarketBanner />
      <div className="wrap-content">
        <MarketCategory />
        <MarketTokens />
      </div>
      <MarketAchieve />
    </Styled>
  );
};

export default memo(Home);
