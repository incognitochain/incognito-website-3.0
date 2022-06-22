import { memo } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Styled = styled.div`
  margin-top: 140px;
  display: flex;
  flex-direction: column;

  .title {
    text-align: center;
  }

  .leftView {
    display: flex;
    flex: 1;
  }

  .rightView {
    display: flex;
    flex: 1;
  }
`;

const ValidatorRewardEstimation = () => {
  const history = useHistory();
  return (
    <Styled>
      <p className="title fw-medium main-title-text">Rewards Estimation</p>
      <div className="leftView"></div>
      <div className="rightView"></div>
    </Styled>
  );
};

export default memo(ValidatorRewardEstimation);
