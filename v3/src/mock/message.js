import { USER_NAME, MESSAGE_LIST } from '@/const';
import { getRandom } from '@/utils';

/**
 * 留言板内容
 */
export default [
  {
    id: 1,
    // 类型
    type: 1,
    // 内容
    cont: MESSAGE_LIST[getRandom(0, 9)],
    // 昵称
    name: USER_NAME[getRandom(0, 9)],
    // 时间
    time: '2023-12-10 12:21:21',
  },
  {
    id: 2,
    // 类型
    type: 2,
    // 内容
    cont: MESSAGE_LIST[getRandom(0, 9)],
    // 昵称
    name: USER_NAME[getRandom(0, 9)],
    // 时间
    time: '2024-12-12 12:21:21',
  },
  {
    id: 3,
    // 类型
    type: 3,
    // 内容
    cont: MESSAGE_LIST[getRandom(0, 9)],
    // 昵称
    name: USER_NAME[getRandom(0, 9)],
    // 时间
    time: '2023-10-14 15:21:21',
  },
  {
    id: 4,
    // 类型
    type: 4,
    // 内容
    cont: MESSAGE_LIST[getRandom(0, 9)],
    // 昵称
    name: USER_NAME[getRandom(0, 9)],
    // 时间
    time: '2023-12-16 12:20:21',
  },
];
