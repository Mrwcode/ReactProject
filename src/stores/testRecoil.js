/*
 * Author: gavin.wang
 * Date: 2024-05-16 13:45:39
 * LastEditors: gavin.wang
 * LastEditTime: 2024-05-16 13:47:39
 * FilePath: /test/src/stores/testRecoil.js
 * Description:
 */
import { atom } from 'recoil';

const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});
