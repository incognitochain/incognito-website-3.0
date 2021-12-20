import Category from '@components/Category';
import { ICategory } from '@components/Category/Category';
import { AddIcon, LockIcon, TrustlessIcon } from '@components/icons';
import { peggingAppTranslateSelector } from '@src/configs';
import React from 'react';
import { useSelector } from 'react-redux';

const PeggingCategory = () => {
  const peggingTrs = useSelector(peggingAppTranslateSelector);

  const CATEGORIES = React.useMemo<ICategory[]>(() => {
    return [
      {
        icon: <LockIcon />,
        title: peggingTrs.private,
        subTitle: peggingTrs.privateSub,
        className: 'category-item-left',
      },
      {
        icon: <AddIcon />,
        title: peggingTrs.permission,
        subTitle: peggingTrs.permissionSub,
        className: 'category-item-center',
      },
      {
        icon: <TrustlessIcon />,
        title: peggingTrs.trust,
        subTitle: peggingTrs.trustSub,
        className: 'category-item-right',
      },
    ];
  }, [peggingTrs]);

  return <Category data={CATEGORIES} />;
};

export default React.memo(PeggingCategory);
