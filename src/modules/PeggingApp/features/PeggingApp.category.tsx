import Category from '@components/Category';
import { ICategory } from '@components/Category/Category';
import { MarketChainIcon, MarketMoneyIcon, MarketSearchIcon } from '@components/icons';
import { peggingAppTranslateSelector } from '@src/configs';
import React from 'react';
import { useSelector } from 'react-redux';

const PeggingCategory = () => {
  const peggingTrs = useSelector(peggingAppTranslateSelector);

  const CATEGORIES = React.useMemo<ICategory[]>(() => {
    return [
      {
        icon: <MarketSearchIcon />,
        title: peggingTrs.private,
        subTitle: peggingTrs.privateSub,
      },
      {
        icon: <MarketChainIcon />,
        title: peggingTrs.permission,
        subTitle: peggingTrs.permissionSub,
        className: 'category-item-center',
      },
      {
        icon: <MarketMoneyIcon />,
        title: peggingTrs.trust,
        subTitle: peggingTrs.trustSub,
      },
    ];
  }, [peggingTrs]);

  return <Category data={CATEGORIES} />;
};

export default React.memo(PeggingCategory);
