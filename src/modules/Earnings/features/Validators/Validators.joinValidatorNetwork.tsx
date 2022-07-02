import validator from '@images/validator.png';
import { memo } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styled, { ITheme } from 'styled-components';

const Styled = styled.div`
  display: flex;
  margin-top: 40px;
  flex-direction: row;
  width: 100%;
  max-height: 464px;
  border-radius: 24px;
  background-color: #252525;

  .leftView {
    display: flex;
    flex: 1;
    padding: 70px;
    justify-content: center;
    flex-direction: column;

    .title-custom {
    }

    .sub-title-text {
      font-size: 18px;
      line-height: 24px;
      letter-spacing: 0.01em;
      white-space: initial;
      margin-top: 30px;
      margin-right: 40px;
    }
  }

  .rightView {
    display: flex;
    flex: 1;
    margin-right: 50px;
    .img {
      width: 100%;
      height: auto;
      margin-left: auto;
      margin-right: auto;
      object-fit: contain;
    }
  }

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToSmall`
      flex-direction: column;
      display: flex;
      max-height: none;
      .leftView {
        padding: 20px;
      }
      .rightView {
        display: flex;
        flex: 1;
        .img {
          width: 100%;
          height: auto;
          object-fit: contain;
        }
      }
  `}

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
      flex-direction: column;
      max-height: none;
      .leftView {
        padding: 20px;
        .title-custom {
          font-size: 34px;
        }
      }
      .rightView 
        margin-right: 0px;
        display: flex;
        flex: 1;
        .img {
          margin-top: 20px;
          margin-bottom: 20px;
          margin-left: auto;
          margin-right: auto;
          height: auto;
          object-fit: cover;
        }
      }
  `}

${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToLarge`
      .leftView {
        .title-custom {
          font-size: 34px;
        }
      }
      .rightView 
        margin-right: 0px;
        display: flex;
        flex: 1;
        .img {
          margin-top: 20px;
          margin-bottom: 20px;
          margin-left: auto;
          margin-right: auto;
          height: auto;
          object-fit: cover;
        }
      }
  `}
`;

const ValidatorsJoinNetwork = () => {
  const history = useHistory();
  return (
    <Styled>
      <div className="leftView">
        <p className="title fw-medium main-title-text title-custom">
          Join the Validator Network
        </p>
        <p className="text2 sub-title sub-title-text description">
          Validators imply a group of nodes that perform consensus work, including
          verifying transactions, voting to add new blocks to the blockchain and earning
          block rewards.
        </p>
        <p className="text2 sub-title sub-title-text description">
          The fixed stake of 1,750 PRV ensures the fair probability for Nodes to be
          elected to join in the consensus group.
        </p>
      </div>
      <div className="rightView">
        <img className="img" src={validator} alt="phone-incognito-validator" />
      </div>
    </Styled>
  );
};

export default memo(ValidatorsJoinNetwork);
