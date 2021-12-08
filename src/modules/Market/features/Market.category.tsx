import { MarketChainIcon, MarketMoneyIcon, MarketSearchIcon } from '@components/icons';
import { Row } from '@src/components';
import { marketTranslateSelector } from '@src/configs';
import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import styled, { ITheme } from 'styled-components';

export const Styled = styled(Row)`
  .wrap-category-item {
    flex: 1;
    height: 223px;
    max-width: 480px;
  }
`;

interface ICategory {
  icon: FunctionComponent;
  title: string;
  subTitle: string;
}

const MarketCategory = () => {
  const marketTrs = useSelector(marketTranslateSelector);

  const CATEGORIES = React.useMemo<ICategory[]>(() => {
    return [
      {
        icon: MarketSearchIcon,
        title: marketTrs.untraceable,
        subTitle: marketTrs.untraceableDetail,
      },
      {
        icon: MarketChainIcon,
        title: marketTrs.unlinkable,
        subTitle: marketTrs.unlinkableDetail,
      },
      {
        icon: MarketMoneyIcon,
        title: marketTrs.commissionFree,
        subTitle: marketTrs.commissionFreeDetail,
      },
    ];
  }, []);

  const renderItem = (item: ICategory) => (
    <div key={item.title} className="wrap-category-item background2"></div>
  );

  return <Styled>{CATEGORIES.map(renderItem)}</Styled>;
};

export default React.memo(MarketCategory);
