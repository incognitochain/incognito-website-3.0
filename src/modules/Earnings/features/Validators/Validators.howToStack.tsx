import { Button, Col, Row } from 'antd';
import { memo, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styled, { ITheme } from 'styled-components';

const ItemStyled = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 24px;
  background-color: #252525;

  .circleView {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #303030;

    .number {
      text-align: center;
      font-weight: 500;
      font-size: 24px;
    }
  }

  .title {
    margin-top: 30px;
    font-weight: 500;
    font-size: 24px;
  }

  .description {
    margin-top: 10px;
    font-weight: 400;
    font-size: 16px;
  }

  :hover {
    background-color: #363636;
  }

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToSmall`
  `}

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
  `}

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToLarge`
  `}

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToSupperLarge`
    max-height: 500px;
  `}
`;

interface StackItemProps {
  index?: number;
  title?: string;
  description?: string;
}

const StackItem = (props: StackItemProps) => {
  const { index = 0, title = '', description = '' } = props;
  return (
    <ItemStyled>
      <div className="circleView">
        <p className="number">{index}</p>
      </div>
      <p className="title">{title}</p>
      <p className="description text2">{description}</p>
    </ItemStyled>
  );
};

const Styled = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;

  .topView {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    .topLeft {
    }

    .topRight {
      display: flex;
      flex-direction: row;
      align-items: center;
      button {
        margin-left: 10px;
        cursor: pointer;
      }
      p {
        font-size: 17px;
        line-height: 19px;
        border-bottom: 1px solid;
        cursor: pointer;
        :hover {
          opacity: 0.7;
        }
      }
    }
  }

  .stackItemListView {
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    width: 100%;
    .space {
      height: 100%;
      width: 30px;
    }

    .row {
      display: flex;
      flex: 1;
      width: 100%;
    }
  }

  .a {
    margin-top: 10px;
  }

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToSmall`
  `}

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
  `}
`;

const ValidatorHowToStack = () => {
  const myRef = useRef<any>(undefined);
  const location = useLocation();
  const state = location.state as { activeScroll: boolean };

  useEffect(() => {
    if (myRef && state && state.activeScroll) {
      myRef && myRef?.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  return (
    <Styled ref={myRef}>
      <div className="topView">
        <div className="topLeft">
          <p className="title fw-medium main-title-text">How to stake</p>
        </div>
        <div className="topRight">
          <p>See full walkthrough</p>
          <button onClick={() => {}}>
            <Button
              type="primary"
              shape="round"
              size="large"
              className="button1"
              onClick={() => {}}>
              {'Buy PRV'}
            </Button>
          </button>
        </div>
      </div>
      <div className="stackItemListView">
        <Row className="row" gutter={{ xs: 16, sm: 24, md: 32, lg: 40 }}>
          <Col lg={6} md={12} sm={16} xs={24} className={'a'}>
            <StackItem
              index={1}
              title={'Get VPS'}
              description={
                'Prepare an always-on computer or set up a Virtual Private Server (VPS).'
              }
            />
          </Col>
          <Col lg={6} md={12} sm={16} xs={24} className={'a'}>
            <StackItem
              index={2}
              title={'Docker and Script installation'}
              description={`Start your node using Incognito's convenient and easy installation script.`}
            />
          </Col>
          <Col lg={6} md={12} sm={16} xs={24} className={'a'}>
            <StackItem
              index={3}
              title={'Stake 1,750 PRV'}
              description={
                'A fair fixed stake amount which remains locked while running a validator node.'
              }
            />
          </Col>
          <Col lg={6} md={12} sm={16} xs={24} className={'a'}>
            <StackItem
              index={4}
              title={'Earnings'}
              description={`Your Node is all set. Let’s wait to be selected to earn rewards and make profit.`}
            />
          </Col>
        </Row>
      </div>
    </Styled>
  );
};

export default memo(ValidatorHowToStack);
