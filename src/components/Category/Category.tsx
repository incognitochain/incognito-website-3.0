import { MarketChainIcon, MarketMoneyIcon, MarketSearchIcon } from '@components/icons';
import { peggingAppTranslateSelector } from '@src/configs';
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

export interface ICategory {
  icon: ReactElement;
  title: string;
  subTitle: string;
  className?: string;
}

const Category = ({ data = [] }: { data: ICategory[] }) => {
  const renderItem = (item: ICategory) => (
    <Col key={item.title} className={`wrap-category-item background2 ${item.className}`}>
      {item.icon}
      <p className="fs-large category-title">{item.title}</p>
      <p className="fw-regular fs-medium category-sub-title text2">{item.subTitle}</p>
    </Col>
  );

  return <Styled>{data.map(renderItem)}</Styled>;
};

export default React.memo(Category);
