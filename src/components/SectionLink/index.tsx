import linkImg from '@images/link-icon.png';
import React from 'react';
import { isMobile } from 'react-device-detect';
import styled, { ITheme } from 'styled-components';

const Styled = styled.div`
  padding-top: 40px;
  .label {
    font-size: 22px;
    line-height: 33px;
  }
  .link-text {
    cursor: pointer;
  }
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToLarge`
    .label {
      font-size: 18px;
      line-height: 27px;
    }
  `}

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
    padding-top: 16px;
    .label {
      font-size: 16px;
      line-height: 24px;
    }
  `}
`;

const SectionLink = React.memo(
  ({
    title = 'Want to start a market for your coin?',
    subTitle = 'Go to exchange',
    link = 'https://we.incognito.org/t/incognito-exchange/337',
    className,
  }: {
    title?: string;
    subTitle?: string;
    link?: string;
    className?: string;
  }) => {
    return (
      <Styled className={`${className}`}>
        <p className="text2 label">
          {`${title} `}
          <span
            className="text3 link-text"
            onClick={() => {
              window.open(link, '_blank');
            }}>
            {subTitle}
            <img
              src={linkImg}
              style={{ width: isMobile ? 14 : 18, height: 'auto', marginLeft: 5 }}
              alt="link-icon"
            />
          </span>
        </p>
      </Styled>
    );
  },
);

export default SectionLink;
