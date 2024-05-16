/*
 * Author: gavin.wang
 * Date: 2024-05-15 15:20:03
 * LastEditors: gavin.wang
 * LastEditTime: 2024-05-16 13:47:14
 * FilePath: /test/src/App.jsx
 * Description:
 */
import { Suspense } from 'react';
import { ConfigProvider, App } from 'antd';
import antdConfig from '../config/antd.config';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import styles from './App.module.less';
import { RecoilRoot } from 'recoil';

function MyApp() {
  const { message, modal, notification } = App.useApp();

  return (
    <>
      <RecoilRoot>
        <ConfigProvider {...antdConfig}>
          <App style={{ width: '100vw', height: '100vh', overflow: 'hidden' }} className={styles.app}>
            <Suspense fallback={<div>加载中...</div>}>
              <RouterProvider router={router}></RouterProvider>
            </Suspense>
          </App>
        </ConfigProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
