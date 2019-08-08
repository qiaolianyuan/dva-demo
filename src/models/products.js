import { delay } from '../utils/util';

export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
  effects: {
    * setdelete({ payload }, { call, put }) {
      yield call(delay, 2000);
      yield put({ type: 'delete', payload });
    },
  },
};