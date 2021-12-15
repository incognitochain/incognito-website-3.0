import { MenuOutlined } from '@ant-design/icons';
import downImg from '@images/down-icon.png';
import logo from '@images/logo.png';
import { ReactComponent as IcClose } from '@images/svg/close-icon.svg';
import { routeMarket, routePeggingApps, routeStructure } from '@src/modules';
import { Button, Col, Drawer, Dropdown, Menu, Row } from 'antd';
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
    sub: 'The network',
  },
  {
    name: 'Learn',
    path: 'https://we.incognito.org/',
    sub: 'How it works',
  },
  {
    name: 'Follow',
    path: 'https://we.incognito.org/',
    sub: 'The roadmap',
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
      style={{ width: 155, paddingTop: 16, paddingLeft: 24, paddingRight: 10 }}>
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
      <Button
        className="menu-mobile btn-round"
        type="primary"
        shape="round"
        size="large"
        onClick={openMenu}>
        <MenuOutlined width={22} height={22} style={{ cursor: 'pointer' }} />
      </Button>
      <Drawer
        placement="right"
        width="100%"
        closable
        visible={visible}
        key="right"
        onClose={onClose}
        drawerStyle={{ backgroundColor: 'black' }}
        headerStyle={{
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'flex-end',
          flexDirection: 'row',
        }}
        closeIcon={<IcClose style={{ marginTop: 8 }} width={22} height={22} />}>
        <Col>
          {menuItem.map((item) => {
            if (item.isLink) {
              return (
                <Link
                  style={{
                    color: 'white',
                    marginTop: 32,
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer">
                  {item.name}
                </Link>
              );
            }
            return (
              <NavLink
                key={item.name}
                style={{
                  color: 'white',
                  marginTop: 32,
                  fontWeight: 'bold',
                  fontSize: 16,
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
          style={{ paddingTop: 32 }}
          onClick={() => setExpand((expand) => !expand)}>
          <p
            className="sub-menu-text"
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            More
          </p>
          <img
            className="logo"
            alt=""
            src={downImg}
            style={{ width: 14, height: 14, marginLeft: 10, marginTop: 3 }}
          />
        </Row>
        {expand && (
          <Col>
            {moreItem.map((item) => (
              <div key={item.name}>
                <Link
                  style={{
                    color: 'white',
                    marginTop: 32,
                    fontWeight: 'medium',
                    fontSize: 16,
                  }}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer">
                  {item.name}
                </Link>
              </div>
            ))}
          </Col>
        )}
      </Drawer>
    </Styled>
  );
};

export default memo(Header);
