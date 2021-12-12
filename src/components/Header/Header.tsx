import downImg from '@images/down-icon.png';
import linkImg from '@images/link-white-icon.png';
import logo from '@images/logo.png';
import { routeMarket, routePeggingApps, routeStructure } from '@src/modules';
import { Dropdown, Menu, Row } from 'antd';
import React, { memo } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Link } from 'rebass';

import { MenuDropdown, Styled } from './Header.styled';

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
    name: 'Explore',
    path: 'https://explorer.incognito.org',
  },
  {
    name: 'Learn',
    path: 'https://we.incognito.org/',
  },
  {
    name: 'Follow',
    path: 'https://we.incognito.org/',
  },
];

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
    <MenuDropdown theme="dark">
      {moreItem.map((item) => {
        return (
          <Menu.Item key={item.name} onClick={() => window.open(item.path, '_blank')}>
            <Row align="middle">
              <p className="fs-medium">{item.name}</p>
              <img
                className="logo"
                alt=""
                src={linkImg}
                style={{ width: 14, height: 14, marginLeft: 10 }}
              />
            </Row>
          </Menu.Item>
        );
      })}
    </MenuDropdown>
  );

  return (
    <Styled align="middle" className="default-padding-horizontal">
      <img className="app-logo" src={logo} alt="app-logo" />
      <Row className="wrap-menu-desktop">
        <div className="menu">{HomeMenu()}</div>
      </Row>
      <Dropdown overlay={MoreMenu} placement="bottomCenter" arrow>
        <Row align="middle" style={{ paddingTop: 7 }}>
          <p className="sub-menu-text">More</p>
          <img
            className="logo"
            alt=""
            src={downImg}
            style={{ width: 14, height: 14, marginLeft: 10 }}
          />
        </Row>
      </Dropdown>
    </Styled>
  );
};

export default memo(Header);
