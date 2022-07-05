import { MarketChainIcon, MarketMoneyIcon, MarketSearchIcon } from '@components/icons';
import { peggingAppTranslateSelector } from '@src/configs';
import { Col, List, Row } from 'antd';
import React, { ReactElement } from 'react';
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

  .category-item-left {
    margin-right: 20px;
  }

  .category-item-right {
    margin-left: 20px;
  }

  .category-item-center {
    margin-left: 20px;
    margin-right: 20px;
  }

  .category-title {
    margin-top: 16px;
  }

  .category-sub-title {
    margin-top: 4px;
  }

  .wrap-category-item:last-child {
    height: auto;
    max-height: 320px;
  }

  .wrap-category-item ~ .wrap-category-item {
    margin-left: 40px;
  }
  .wrap-category-item:last-child {
    height: 100%;
  }

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToLarge`
      .category-title {
        margin-top: 16px;
      }
      .wrap-category-item {
        border-radius: 16px;
        padding: 24px;
        padding-right: 24px;
      }
      .category-item-left {
        margin-right: 20px;
      }
    
      .category-item-right {
        margin-left: 20px;
      }
      .category-item-center {
        margin-left: 5px;
        margin-right: 5px;
      }
      .category-sub-title {
        margin-top: 4px;
      }
  `}

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        .ant-card-body {
          padding: 0;
          background-color: red;
        }
        .wrap-category-item {
          max-width: none;
          padding: 16px;
          max-height: 320px;
          height: 100%
        }
        .category-title {
        }
        .category-item-center {
          margin-bottom: 0px;
          margin-left: 4px;
          margin-right: 0px;
        }
        .category-item-left {
          margin-right: 4px !important;
        }
        .wrap-category-item ~ .wrap-category-item {
          margin-left: 10px;
        }
        .wrap-category-item:last-child {
          padding-top: 24px;
          padding-bottom: 24px;
        }
        .category-sub-title {
        }
        .wrap-category-item:first-child {
          margin-right: 0px;
        }
        .wrapper:last-child {
          padding-top: 8px
        }
        .category-item-right {
          margin-left: 0px;
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
  const renderItem = (item: ICategory, index: number) => (
    <Col className="wrapper" xl={8} xs={index === 2 ? 24 : 12} key={item.title}>
      <Col className={`wrap-category-item background2 ${item.className}`}>
        {item.icon}
        <h5 className="category-title">{item.title}</h5>
        <p className="text2 description3 category-sub-title">{item.subTitle}</p>
      </Col>
    </Col>
  );
  return <Styled>{data.map(renderItem)}</Styled>;
};

export default React.memo(Category);
