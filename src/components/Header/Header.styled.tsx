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
    margin-top: 7px;
    text-align: right;
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

  .active-dropdown {
    margin-left: 40px;
    span {
      color: ${({ theme }: { theme: ITheme }) => theme.text2};
      :hover {
        color: ${({ theme }: { theme: ITheme }) => theme.text1};
      }
    }
  }

  .ant-menu-submenu-title {
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
  }
  .ant-menu-submenu-selected .ant-menu-title-content {
    color: ${({ theme }: { theme: ITheme }) => theme.text4};
  }
  .active-dropdown {
    margin-left: 40px;
    span {
      color: rgba(255, 255, 255, 0.65);
      :hover {
        color: ${({ theme }: { theme: ITheme }) => theme.text4};
      }
    }
  }
`;

export const WrapSubMenu = styled(Menu)`
  border-radius: 16px;
  .logo {
    margin-right: 16px;
    width: 24px;
    height: 24px;
    justify-content: center;
  }
`;

export const MenuDropdown = styled(Menu)`
  border-radius: 16px;
  width: 180px;
  background: #141416 !important;
  .logo {
    margin-right: 16px;
    width: 24px;
    height: 24px;
    justify-content: center;
  }
`;
