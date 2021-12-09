import { MarketChainIcon, MarketMoneyIcon, MarketSearchIcon } from '@components/icons';
import { marketTranslateSelector } from '@src/configs';
import { Col, Row } from 'antd';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import styled, { ITheme } from 'styled-components';

export const Styled = styled(Row)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .wrap-category-item {
    flex: 1;
    border-radius: 16px;
    padding: 32px;
  }

  .category-item-center {
    margin-left: 40px;
    margin-right: 40px;
  }

  .category-title {
    margin-top: 16px;
  }

  .category-sub-title {
    margin-top: 4px;
  }

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        display: contents;
        flex-direction: column;
        .wrap-category-item {
          max-width: none;
        }
        .category-item-center {
          margin-left: 0px;
          margin-right: 0px;
          margin-top: 16px;
          margin-bottom: 16px;
        }
    `}
`;

interface ICategory {
  icon: ReactElement;
  title: string;
  subTitle: string;
  className?: string;
}

const MarketCategory = () => {
  const marketTrs = useSelector(marketTranslateSelector);

  const CATEGORIES = React.useMemo<ICategory[]>(() => {
    return [
      {
        icon: <MarketSearchIcon />,
        title: marketTrs.untraceable,
        subTitle: marketTrs.untraceableDetail,
      },
      {
        icon: <MarketChainIcon />,
        title: marketTrs.unlinkable,
        subTitle: marketTrs.unlinkableDetail,
        className: 'category-item-center',
      },
      {
        icon: <MarketMoneyIcon />,
        title: marketTrs.commissionFree,
        subTitle: marketTrs.commissionFreeDetail,
      },
    ];
  }, [marketTrs]);

  const renderItem = (item: ICategory) => (
    <Col key={item.title} className={`wrap-category-item background2 ${item.className}`}>
      {item.icon}
      <p className="fs-large category-title">{item.title}</p>
      <p className="fw-regular fs-medium category-sub-title text2">{item.subTitle}</p>
    </Col>
  );

  return <Styled>{CATEGORIES.map(renderItem)}</Styled>;
};

export default React.memo(MarketCategory);
