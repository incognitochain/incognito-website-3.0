import logo from '@images/logo.png';
import { routeMarket, routePeggingApps, routeStructure } from '@src/modules';
import { Dropdown, Menu, Row } from 'antd';
import React, { memo } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Link } from 'rebass';
import styled, { ITheme } from 'styled-components';

const menuItem = [
  {
    name: 'Markets',
    path: routeMarket,
  },
  {
    name: 'Apps',
    path: routePeggingApps,
  },
  {
    name: 'Infrastructure',
    path: routeStructure,
  },
  {
    name: 'People',
    path: 'https://we.incognito.org/',
    target: '_blank',
    isLink: true,
  },
];

const moreItem = [
  {
    name: 'Markets',
    path: routeMarket,
  },
  {
    name: 'Apps',
    path: routeMarket,
  },
];

const Styled = styled(Row)`
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
`;

const WrapSubMenu = styled(Menu)`
  border-radius: 16px;
  .logo {
    margin-right: 16px;
    width: 24px;
    height: 24px;
    justify-content: center;
  }
`;

const Header = () => {
  const [pathName, setPathName] = React.useState<string>('');
  const history = useHistory();
  React.useEffect(() => {
    const menuName = (
      menuItem.find((item: any) => item.path === history.location.pathname) as any
    )?.name;
    if (menuName) {
      setPathName(menuName);
    } else {
      setPathName('');
    }
  }, [window.location.pathname]);

  const HomeMenu = () => {
    return (
      <Menu theme="dark" mode="horizontal" defaultOpenKeys={[]} selectedKeys={[pathName]}>
        {menuItem.map((item) => {
          return (
            <Menu.Item onClick={() => setPathName(item.name)} key={item.name}>
              {item?.isLink ? (
                <Link href={item.path} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </Link>
              ) : (
                <NavLink target={item.target} to={item.path}>
                  {item.name}
                </NavLink>
              )}
            </Menu.Item>
          );
        })}
      </Menu>
    );
  };

  const MoreMenu = () => (
    <WrapSubMenu theme="dark" mode="horizontal">
      {moreItem.map((item) => {
        return (
          <Menu.Item key={item.name} onClick={() => console.log('SANG')}>
            <Row>
              <img className="logo" alt="" src={logo} />
              <p>{item.name}</p>
            </Row>
          </Menu.Item>
        );
      })}
    </WrapSubMenu>
  );

  return (
    <Styled align="middle" className="default-padding-horizontal">
      {/*<img className="app-logo" src={logo} alt="app-logo" />*/}
      {/*<Row className="wrap-menu-desktop">*/}
      {/*  <div className="menu">{HomeMenu()}</div>*/}
      {/*</Row>*/}
      {/*<Dropdown overlay={MoreMenu} placement="bottomRight">*/}
      {/*  <p className="sub-menu-text">More</p>*/}
      {/*</Dropdown>*/}
    </Styled>
  );
};

export default memo(Header);
