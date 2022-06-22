import nodeImg from '@images/node-img.png';
import vNodeScriptImg from '@images/vnode-script.png';
import { memo } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styled, { ITheme } from 'styled-components';

const Styled = styled.div`
  margin-top: 140px;
  display: flex;
  flex-direction: column;

  .title {
    text-align: center;
  }

  .sub-title-text {
    align-self: center;
    text-align: center;
    max-width: 520px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.01em;
    white-space: initial;
  }

  .row {
    margin-top: 60px;
    display: flex;
    flex-direction: row;
    .virualNodeView {
      position: relative;
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: flex-start;
      height: 400px;
      padding-top: 40px;
      padding-left: 40px;
      max-height: 440px;
      border-radius: 24px;
      background-color: #252525;

      .sub-title-text {
        align-self: start;
      }

      .image-container {
        position: absolute;
        width: 95%;
        height: auto;
        bottom: 0px;
        right: 0px;
      }
    }
    .space {
      width: 40px;
    }

    .physicalNodeView {
      position: relative;
      display: flex;
      flex: 1;
      flex-direction: row;
      height: 400px;
      max-height: 420px;
      border-radius: 24px;
      background-color: #252525;

      .left {
        flex: 1;
        padding-top: 40px;
        padding-left: 40px;
        flex-direction: column;
        .title {
          text-align: left;
        }
        .sub-title-text {
          align-self: start;
          text-align: left;
        }
      }

      .right {
        display: flex;
        position: relative;
        max-width: 260px;
        height: 100%;
        .image-container1 {
          width: 100%;
          height: auto;
        }
      }
    }

    .title {
      font-weight: 500;
      font-size: 40px;
      line-height: 54px;
    }
  }

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToSmall`
      .row {
        flex-direction: column;
        .leftView {
          position: relative;
          align-items: flex-start;
          max-height: none;
          padding-top: 40px;
          padding-left: 40px;
          border-radius: 24px;

          .image-container {
            margin-top: 20px;
            position: relative;
            width: 100%;
          }
        }
        .space {
          height: 40px;
        }
      }
  `}

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
      .row {
        flex-direction: column;
        .leftView {
          position: relative;
          align-items: flex-start;
          padding-top: 40px;
          padding-left: 40px;
          max-height: none;
          border-radius: 24px;

          .image-container {
            margin-top: 20px;
            position: relative;
          }
        }
        .space {
          height: 40px;
        }
      }
  `}
`;

const ValidatorStackingOptions = () => {
  const history = useHistory();
  return (
    <Styled>
      <p className="title fw-medium main-title-text">Staking Options</p>
      <p className="text2 sub-title sub-title-text">
        There are 2 options to become a validator of Incognito network: Virtual Node
        (vNode) and Physical Node (pNode). Each option requires a stake of 1,750 PRV.{' '}
      </p>
      <div className="row">
        <div className="virualNodeView">
          <p className="title fw-medium main-title-text">Virtual Node</p>
          <p className="sub-title-text">Setup your node in only 1 line of code.</p>
          <img className="image-container" src={vNodeScriptImg} alt="vnode-script" />
        </div>
        <div className="space"></div>
        <div className="physicalNodeView">
          <div className="left">
            <p className="title fw-medium main-title-text">Physical Node</p>
            <p className="sub-title-text">
              A plug and play hardware device for ease of use.
            </p>
          </div>
          <div className="right">
            <img className="image-container1" src={nodeImg} alt="node" />
          </div>
        </div>
      </div>
    </Styled>
  );
};

export default memo(ValidatorStackingOptions);
