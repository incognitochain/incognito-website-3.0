import { memo } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styled, { ITheme } from 'styled-components';

const Styled = styled.div`
  display: flex;
  margin-top: 40px;
  flex-direction: row;

  .sub-title {
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.01em;
    text-align: center;
    margin-right: 8px;
  }

  .earnings-text {
    color: ${({ theme }: { theme: ITheme }) => theme.text5};
  }

  button:hover {
    cursor: pointer;
    color: ${({ theme }: { theme: ITheme }) => theme.text1};
  }
`;

const ValidatorsSubRoute = () => {
  const history = useHistory();
  return (
    <Styled>
      <button
        className="hover"
        onClick={() => {
          history.goBack();
        }}>
        <p className="sub-title earnings-text">Earnings</p>
      </button>
      <p className="sub-title">/</p>
      <button>
        <p className="sub-title">Validators</p>
      </button>
    </Styled>
  );
};

export default memo(ValidatorsSubRoute);
