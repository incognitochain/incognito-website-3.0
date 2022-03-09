import { Col, Row } from 'antd';
import styled, { ITheme } from 'styled-components';

export const Styled = styled(Row)`
  padding-bottom: 25px;
  padding-top: 25px;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.border1};
  .wrap-social {
    flex-direction: row;
    align-items: flex-start;
  }
  .normal-label {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 0.005em;
    color: ${({ theme }) => theme.text1};
  }
  .default-margin-left {
    margin-left: 24px;
  }
  .button-text {
    cursor: pointer;
  }
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToLarge`
  `}
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
    .default-margin-left {
      margin-left: 0px;
    }
    .wrap-social {
      flex-direction: column;
    }
    .normal-label {
      margin-bottom: 6px;    
      font-size: 14px;
      line-height: 24px;
    }
  `}
`;
