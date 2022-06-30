import React, { useEffect, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';

const MenuItemStyled = styled.div`
  display: flex;
  flex-direction: column;

  .topView {
    flex: 1;
    padding: 20px 0px;
    display: flex;
    align-items: center;
    flex-direction: row;

    :hover {
      cursor: pointer;
      opacity: 0.7;
    }

    .title {
      margin: 0px;
      flex: 1;
      text-align: left;
      margin-right: 30px;
    }

    .icon {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: #404040;
      .arrow {
        border: solid white;
        border-width: 0 2.5px 2.5px 0;
        display: inline-block;
        padding: 2.5px;
      }
      .up {
        transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg);
      }
      .down {
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
      }
    }
  }

  .childrenView {
    margin-bottom: 20px;
    * {
      animation: fadeIn 0.8s;
      -webkit-animation: fadeIn 0.8s;
      -moz-animation: fadeIn 0.8s;
      -o-animation: fadeIn 0.8s;
      -ms-animation: fadeIn 0.8s;
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-moz-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-webkit-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-o-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-ms-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }

  .lineBreak {
    flex: 1;
    height: 1px;
    border: 1px solid #363636;
  }
`;

interface AskQuestionItemProps {
  isActive?: boolean;
  title?: string;
  subItem?: React.ReactNode;
  itemOnClick: (key: string) => void;
}
const AskQuestionItem = (props: AskQuestionItemProps) => {
  const { title = '', subItem = true, isActive = false, itemOnClick = () => {} } = props;

  const [expand, setExpand] = useState(false);

  useEffect(() => {
    setExpand(isActive);
  }, [isActive]);

  return (
    <MenuItemStyled>
      <div
        className="topView"
        onClick={() => {
          setExpand(!expand);
          itemOnClick(title);
        }}>
        <p className="title sub-title-text">{title}</p>
        <div className="icon">
          <i className={`arrow ${expand ? 'up' : 'down'}`} />
        </div>
      </div>

      {expand && <div className="childrenView">{subItem}</div>}
      <div className="lineBreak"></div>
    </MenuItemStyled>
  );
};

export default AskQuestionItem;
