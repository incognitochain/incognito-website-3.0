import validator from '@images/validator.png';
import { memo } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { ITheme } from 'styled-components';

const Styled = styled.div`
  display: flex;
  margin-top: 40px;
  flex-direction: row;
  width: 100%;
  border-radius: 24px;
  background-color: ${({ theme }: { theme: ITheme }) => theme.color_grey2};

  .leftView {
    display: flex;
    flex: 1;
    padding: 70px;
    justify-content: center;
    flex-direction: column;
    .descriptionContainer {
      margin-top: 40px;
    }
  }

  .rightView {
    flex: 1;
    padding: 20px;
    .img {
      margin-top: 30px;
      width: 100%;
      height: auto;
      max-width: 625px;
      max-height: 437px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToSupperLarge`
      flex-direction: row;
  `}

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToLarge`
      flex-direction: column;
      .leftView {
        padding: 50px;
      }
      .rightView {
        padding: 0px;
        .img {
          margin: 0px;
        }
      }
  `} 
  
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
      .leftView {
        padding: 24px;
        .descriptionContainer {
          margin-top: 16px;
        }
      }
      .rightView {
        margin-top: 25px;
      }
  `}
`;

const ValidatorsJoinNetwork = () => {
  const history = useHistory();
  return (
    <Styled>
      <div className="leftView">
        <p className="header">Join the Validator Network</p>
        <div className="descriptionContainer">
          <p className="description">
            Validators imply a group of nodes that perform consensus work, including
            verifying transactions, voting to add new blocks to the blockchain and earning
            block rewards.
          </p>
        </div>
        <div className="descriptionContainer">
          <p className="description">
            The fixed stake of 1,750 PRV ensures the fair probability for Nodes to be
            elected to join in the consensus group.
          </p>
        </div>
      </div>
      <div className="rightView center">
        <img className="img" src={validator} alt="phone-incognito-validator" />
      </div>
    </Styled>
  );
};

export default memo(ValidatorsJoinNetwork);
