/*
 * Author: gavin.wang
 * Date: 2024-05-15 16:07:35
 * LastEditors: gavin.wang
 * LastEditTime: 2024-05-15 16:30:58
 * FilePath: /test/src/routes/index.jsx
 * Description:
 */
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import BaseLayout from '../layout/BaseLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    // children:[
    //   {
    //     path:'/home',
    //     element:lazy(()=>import('../layout/BaseLayout'))
    //   }
    // ]
  },
]);

export default router;
