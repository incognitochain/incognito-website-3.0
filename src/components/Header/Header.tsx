import { MenuOutlined } from '@ant-design/icons';
import closeIcon from '@images/close.png';
import downImg from '@images/down-icon.png';
import logo from '@images/logo.png';
import menuBarIcon from '@images/menu-bar.png';
import { ReactComponent as IcClose } from '@images/svg/close-icon.svg';
import { routeMarket, routePeggingApps, routeStructure } from '@src/modules';
import { Button, Col, Dropdown, Menu, Row } from 'antd';
import React, { memo } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Link } from 'rebass';

import { DrawerStyled, MenuDropdown, Styled } from './Header.styled';

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
    name: 'Community',
    path: 'https://we.incognito.org/t/about-the-incognito-community/373',
    target: '_blank',
    isLink: true,
  },
];

const moreItem = [
  {
    name: 'Explorer',
    path: 'https://explorer.incognito.org',
    sub: 'The network',
  },
  {
    name: 'White Paper',
    path: 'https://we.incognito.org/t/incognito-whitepaper-incognito-mode-for-cryptonetworks/168',
    sub: 'The Incognito mode',
  },
  {
    name: 'Roadmap',
    path: 'https://we.incognito.org/t/incognito-2022-technical-roadmap/15002',
    sub: 'The development',
  },
];

const Header = () => {
  const [pathName, setPathName] = React.useState<string>('');
  const [visible, setVisible] = React.useState(false);
  const [expand, setExpand] = React.useState(false);
  const history = useHistory();
  const openMenu = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
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
    <MenuDropdown
      className="sub-menu-header"
      theme="dark"
      style={{ width: 200, paddingTop: 16, paddingLeft: 24, paddingRight: 10 }}>
      {moreItem.map((item) => {
        return (
          <Menu.Item
            className="dropdown-menu-item"
            key={item.name}
            style={{ marginBottom: 16 }}
            onClick={() => window.open(item.path, '_blank')}>
            <Row align="middle">
              <p className="fs-medium">{item.name}</p>
              <div className="logo" />
            </Row>
            <p className="text2 fs-small">{item.sub}</p>
          </Menu.Item>
        );
      })}
    </MenuDropdown>
  );

  return (
    <Styled align="middle" className="default-padding-horizontal">
      <NavLink className="logo-mobile" to="/" onClick={() => setPathName(routeMarket)}>
        <img className="app-logo" src={logo} alt="app-logo" />
      </NavLink>
      <Row className="wrap-menu-desktop">
        <div className="menu">{HomeMenu()}</div>
      </Row>
      <Dropdown
        overlayStyle={{ width: 120 }}
        overlay={MoreMenu}
        placement="bottomRight"
        className="more-dropdown">
        <Row align="middle" style={{ paddingTop: 7 }}>
          <p className="sub-menu-text">Dive in</p>
          <img
            className="logo"
            alt=""
            src={downImg}
            style={{ width: 14, height: 14, marginLeft: 10 }}
          />
        </Row>
      </Dropdown>
      <div className="menu-mobile btn-round" onClick={openMenu}>
        <img src={menuBarIcon} style={{ width: 32, height: 32 }} alt="close-icon" />
      </div>
      <DrawerStyled
        placement="right"
        width="100%"
        closable
        visible={visible}
        key="right"
        onClose={onClose}
        drawerStyle={{ backgroundColor: '#1A1A1A', paddingTop: 0 }}
        headerStyle={{
          backgroundColor: '#1A1A1A',
          display: 'flex',
          justifyContent: 'flex-end',
          flexDirection: 'row',
          height: 0,
          padding: 0,
        }}>
        <Row
          align="middle"
          justify="space-between"
          className="border-bottom"
          style={{ height: 76, marginBottom: 32 }}>
          <Row className="padding-horizontal" justify="space-between">
            <NavLink
              className="logo-mobile"
              to="/"
              onClick={onClose}
              style={{ width: 162 }}>
              <img
                className="app-logo"
                src={logo}
                alt="app-logo"
                style={{ width: 162 }}
              />
            </NavLink>
            <div onClick={onClose}>
              <img src={closeIcon} style={{ width: 32, height: 32 }} alt="close-icon" />
            </div>
          </Row>
        </Row>
        <Col>
          {menuItem.map((item) => {
            if (item.isLink) {
              return (
                <Link
                  className="padding-horizontal"
                  style={{
                    color: 'white',
                    marginTop: 16,
                    fontWeight: 500,
                    fontSize: 34,
                  }}
                  href={item.path}
                  target="_blank"
                  key={item.name}
                  rel="noopener noreferrer">
                  {item.name}
                </Link>
              );
            }
            return (
              <NavLink
                className="padding-horizontal"
                key={item.name}
                style={{
                  color: 'white',
                  marginTop: 16,
                  fontWeight: '500',
                  fontSize: 34,
                }}
                to={item.path}
                onClick={onClose}>
                {item.name}
              </NavLink>
            );
          })}
        </Col>
        <Row
          align="middle"
          className="padding-horizontal"
          style={{ paddingTop: 16 }}
          onClick={() => setExpand((expand) => !expand)}>
          <p
            className="sub-menu-text"
            style={{
              color: 'white',
              fontWeight: 500,
              fontSize: 34,
            }}>
            Dive in
          </p>
          <img
            className="dropdown-icon"
            alt=""
            src={downImg}
            style={{
              marginLeft: 10,
              marginTop: 3,
              transform: expand ? '' : 'rotate(180deg)',
              transition: 'transform 150ms ease',
            }}
          />
        </Row>
        {expand && (
          <Col style={{ marginTop: 24 }}>
            {moreItem.map((item) => (
              <div className="wrap-drawer-sub-item" key={item.name}>
                <Link
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="padding-horizontal">
                  <Row align="middle">
                    <p className="drawer-sub-item-label">{item.name}</p>
                    <div className="logo" />
                  </Row>
                  <p className="drawer-sub-item-desc-label">{item.sub}</p>
                </Link>
              </div>
            ))}
          </Col>
        )}
      </DrawerStyled>
    </Styled>
  );
};

export default memo(Header);
