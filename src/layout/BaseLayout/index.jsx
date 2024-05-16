/*
 * Author: gavin.wang
 * Date: 2024-05-15 16:16:28
 * LastEditors: gavin.wang
 * LastEditTime: 2024-05-16 15:24:11
 * FilePath: /test/src/layout/BaseLayout/index.jsx
 * Description:
 */
import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import styles from './index.module.less';

const { Header, Content, Footer } = Layout;
const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));
const BaseLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className={styles.wrapper}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}>
        <div className='demo-logo' />
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['2']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
        className={styles.content}>
        <Breadcrumb
          style={{
            margin: '16px 0',
            color: 'white',
          }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
            color: 'white',
          }}>
          Content12345
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default BaseLayout;
