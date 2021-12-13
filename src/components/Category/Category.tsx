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

  .wrap-category-item:last-child {
    height: auto;
    max-height: 300px;
  }

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        // display: contents;
        // flex-direction: column;
        .wrap-category-item {
          max-width: none;
          padding-left: 16px;
          padding-right: 16px;
          padding-top: 24px;
          height: 300px;
        }
        .category-item-center {
          margin-left: 10px;
          margin-right: 10px;
          margin-bottom: 16px;
        }
    `}
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToSmall`
        // display: contents;
        // flex-direction: column;
        .wrap-category-item {
          max-width: none;
          padding-left: 16px;
          padding-right: 16px;
          padding-top: 24px;
          height: 300px;
        }
        .category-item-center {
          margin-right: 0px;
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
    <Col
      span={8}
      key={item.title}
      className={`wrap-category-item background2 ${item.className}`}>
      {item.icon}
      <p className="fs-large category-title">{item.title}</p>
      <p className="fw-regular fs-medium category-sub-title text2">{item.subTitle}</p>
    </Col>
  );

  return <Styled>{data.map(renderItem)}</Styled>;
};

export default React.memo(Category);
