import MarketAchieve from '@modules/Market/features/Market.achieve';
import MarketBanner from '@modules/Market/features/Market.banner';
import MarketCategory from '@modules/Market/features/Market.category';
import Footer from '@modules/Market/features/Market.footer';
import MarketTokens from '@modules/Market/features/Market.token';
import { Row } from 'antd';
import React, { memo } from 'react';
import { isMobile } from 'react-device-detect';

import { Styled } from './Market.styled';

const Home = () => {
  React.useEffect(() => {
    // console.log('DIMENSIONS::::', window.innerWidth, window.innerHeight);
  }, []);
  return (
    <Styled isMobile={isMobile}>
      <Row
        className="default-padding-horizontal market-header"
        align="middle"
        justify="space-between">
        <MarketBanner />
        <MarketTokens />
      </Row>
      <div className="default-padding-horizontal">
        <MarketCategory />
      </div>
      <MarketAchieve />
      <Footer />
    </Styled>
  );
};

export default memo(Home);
