import linkBlueImg from '@images/link-blue-icon.png';
import linkImg from '@images/link-white-icon.png';
import { Menu, Row } from 'antd';
import styled, { ITheme } from 'styled-components';

export const Styled = styled(Row)`
  height: 71px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.border1};
  z-index: 2;

  .app-logo {
    width: 162px;
    height: 32px;
  }

  .wrap-menu-desktop {
    margin: auto;
    padding-right: 80px;
    display: initial;
  }

  .ant-menu-dark.ant-menu-horizontal {
    flex: 1;
    background: transparent;
    padding: 0 4px;
    height: 40px;
  }

  .ant-menu.ant-menu-dark .ant-menu-item-selected > a {
    color: ${({ theme }: { theme: ITheme }) => theme.text1};
  }

  .ant-menu-dark.ant-menu-horizontal > .ant-menu-item {
    background: transparent;
    padding: 0 16px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0;
    text-align: center;
    font-size: 18px;

    :hover {
      color: ${({ theme }: { theme: ITheme }) => theme.text1};
    }
  }

  .sub-menu-text {
    font-size: 18px;
    font-weight: 500;
    text-align: right;
    cursor: pointer;
  }

  .ant-menu-submenu-title {
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
  }
  .ant-menu-submenu-selected .ant-menu-title-content {
    color: ${({ theme }: { theme: ITheme }) => theme.text2};
  }

  .ant-menu-dark .ant-menu-item-selected > span > a {
    color: ${({ theme }: { theme: ITheme }) => theme.text3};
  }

  .ant-menu-submenu-title {
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
  }

  .ant-menu-dark > .ant-menu-item {
    background: ${({ theme }: { theme: ITheme }) => theme.red1};
    padding: 0 16px;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0px;
    text-align: center;

    :hover {
      color: ${({ theme }: { theme: ITheme }) => theme.red1};
    }
  }
  .menu-mobile {
    display: none;
  }
  .btn-round {
    background: none;
  }
  .mobile-link {
    color: ${({ theme }: { theme: ITheme }) => theme.text1};
    margin-top: 32px;
    font-size: 16px;
  }

  .ant-menu-dark > .ant-menu-item {
    background: transparent;
    padding: 0 16px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0;
    text-align: center;
    font-size: 18px;

    :hover {
      color: ${({ theme }: { theme: ITheme }) => theme.text1};
    }
  }

  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToMedium`
          justify-content: space-between;
          .menu-mobile {
            display: initial;
          }
          .wrap-menu-desktop {
            display: none;
          }
          .more-dropdown {
            display: none;
          }
    `}
`;

export const MenuDropdown = styled(Menu)`
  border-radius: 16px;
  background: #141416 !important;
  .logo {
    margin-right: 16px;
    width: 14px;
    height: 14px;
    justify-content: center;
  }
  .logo {
    width: 14px;
    height: 14px;
    margin-left: 6px;
    background: url(${linkImg}) no-repeat;
    display: inline-block;
  }
  .dropdown-menu-item:hover {
    p:first-child {
      color: #1a73e8;
    }
    .logo {
      background: url(${linkBlueImg}) no-repeat;
    }
  }
`;
