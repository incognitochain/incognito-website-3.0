import MarketAchieve from '@modules/Market/features/Market.achieve';
import MarketBanner from '@modules/Market/features/Market.banner';
import MarketCategory from '@modules/Market/features/Market.category';
import Footer from '@modules/Market/features/Market.footer';
import MarketTokens from '@modules/Market/features/Market.token';
import React, { memo } from 'react';

import { Styled } from './Market.styled';

const Home = () => {
  React.useEffect(() => {
    // console.log('DIMENSIONS::::', window.innerWidth, window.innerHeight);
  }, []);
  return (
    <Styled>
      <MarketBanner />
      <div className="wrap-content default-padding-horizontal">
        <MarketCategory />
      </div>
      <MarketTokens />
      <MarketAchieve />
      <Footer />
    </Styled>
  );
};

export default memo(Home);
