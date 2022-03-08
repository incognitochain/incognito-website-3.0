import { Row } from 'antd';
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
  .twitter-text {
    margin-left: 24px;
  }
  .button-text {
    cursor: pointer;
  }
  .term {
    color: ${({ theme }) => theme.text3};
    margin-top: 12px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.005em;
    margin-left: 20px;
  }
  .policy {
    color: ${({ theme }) => theme.text3};
    margin-top: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.005em;
    margin-left: 20px;
  }
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToLarge`
  `}
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToSmall`
  `}
`;
