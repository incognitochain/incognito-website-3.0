import MarketBanner from '@modules/Market/features/Market.banner';
import MarketCategory from '@modules/Market/features/Market.category';
import React, { memo } from 'react';

import { Styled } from './Market.styled';

const Home = () => {
  return (
    <Styled>
      <MarketBanner />
      <div className="wrap-content">
        <MarketCategory />
      </div>
    </Styled>
  );
};

export default memo(Home);
