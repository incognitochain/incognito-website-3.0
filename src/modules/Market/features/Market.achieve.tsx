import { marketTranslateSelector } from '@src/configs';
import { Card, Col, List } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import styled, { ITheme } from 'styled-components';

export const Styled = styled.div`
  height: 752px;
  margin-top: 121px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .achieve-title {
    font-size: 62px;
    line-height: 70px;
    white-space: pre-wrap;
    text-align: center;
  }
  .achieve-margin-right {
    margin-right: 100px;
  }

  .achieve-wrap {
    display: flex;
    flex-direction: row;
    margin-top: 80px;
  }

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
        height: 500px;
        .achieve-circle {
            width: 60px;
            height: 60px;
            border-radius: 30px;
            background-color: ${({ theme }) => theme.background3};
        }
        .achieve-margin-right {
            margin-right: 20px;
        }
        .achieve-title {
            font-size: 32px;
            line-height: 40px;
        }
    `}
`;

const Item = styled.div`
  .achieve-circle {
    width: 240px;
    height: 240px;
    border-radius: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background3};
  }
  .achieve-item-title {
    font-size: 54px;
    color: ${({ theme }) => theme.background4};
  }
  .achieve-item-sub-title {
    margin-top: 24px;
    font-size: 22px;
    color: ${({ theme }) => theme.text2};
  }
  :hover {
    .achieve-circle {
      background-color: ${({ theme }) => theme.background4};
    }
    .achieve-item-title {
      color: ${({ theme }) => theme.white};
    }
    .achieve-item-sub-title {
      color: ${({ theme }) => theme.text1};
    }
  }

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
          .achieve-item-title {
            font-size: 24;
          }
    `}
`;

const MarketAchieve = () => {
  const marketTrs = useSelector(marketTranslateSelector);

  const Factory = React.useMemo(
    () => [
      {
        title: '$550M',
        content: marketTrs.volumeTraded,
        className: 'achieve-margin-right',
      },
      {
        title: '1M',
        content: marketTrs.anonymousTrades,
        className: 'achieve-margin-right',
      },
      {
        title: '73',
        content: marketTrs.privateCryptocurrencies,
        className: 'achieve-margin-right',
      },
      { title: '11', content: marketTrs.bridgedBlockchains },
    ],
    [marketTrs],
  );

  const renderItem = (item: any) => (
    <Item className={`${item.className}`}>
      <div className={`achieve-circle`}>
        <p className="achieve-item-title">{item.title}</p>
      </div>
      <p className="text-align-center achieve-item-sub-title">{item.content}</p>
    </Item>
  );
  return (
    <Styled className="background2">
      <p className="achieve-title">{marketTrs.youCanTradeCrypto}</p>
      <div className="achieve-wrap">{Factory.map(renderItem)}</div>
    </Styled>
  );
};

export default React.memo(MarketAchieve);
