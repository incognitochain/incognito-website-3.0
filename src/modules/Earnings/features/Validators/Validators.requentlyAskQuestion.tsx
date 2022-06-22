import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import voteIllustration from '@images/vote-illustration.png';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { memo } from 'react';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styled, { ITheme } from 'styled-components';
// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],
//   type?: 'group',
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   } as MenuItem;
// }
// const items: any[] = [
//   getItem('Navigation One', 'sub1', <MailOutlined />, [
//     getItem('Option 1', '1'),
//     getItem('Option 2', '2'),
//     getItem('Option 3', '3'),
//     getItem('Option 4', '4'),
//   ]),
//   getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
//     getItem('Option 5', '5'),
//     getItem('Option 6', '6'),
//     getItem('Submenu', 'sub3', null, [
//       getItem('Option 7', '7'),
//       getItem('Option 8', '8'),
//     ]),
//   ]),
//   getItem('Navigation Three', 'sub4', <SettingOutlined />, [
//     getItem('Option 9', '9'),
//     getItem('Option 10', '10'),
//     getItem('Option 11', '11'),
//     getItem('Option 12', '12'),
//   ]),
// ];
// type MenuItem = Required<MenuProps>['items'][number];

// // submenu keys of first level
// const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const Styled = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: row;

  .title {
    text-align: center;
  }

  .leftView {
    display: flex;
    /* background-color: red; */
    flex: 1;
    flex-direction: column;

    .title {
      text-align: left;
    }
  }

  .rightView {
    display: flex;
    flex: 1;
    /* background-color: blue; */
    flex-direction: column;
  }
`;

const ValidatorAskedQuestion = () => {
  const history = useHistory();
  const [openKeys, setOpenKeys] = useState(['sub1']);

  // const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
  //   const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
  //   if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
  //     setOpenKeys(keys);
  //   } else {
  //     setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  //   }
  // };
  return (
    <Styled>
      <div className="leftView">
        <p className="title fw-medium main-title-text">Frequently Asked Questions</p>
        <p className="sub-title sub-title-text">See all question</p>
      </div>
      <div className="rightView">
        {/* <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{ width: 256 }}
          items={items}
        /> */}
      </div>
    </Styled>
  );
};

export default memo(ValidatorAskedQuestion);
