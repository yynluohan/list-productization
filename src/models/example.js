import { query } from '../utils/services'

export default {

  namespace: 'example',

  state: {
    name:'这个一个模版'
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen(( location ) => {
        if (location.pathname === '/') {
          dispatch({
            type: 'fetch'
          })
        }
      })
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      // const result = yield call(query,'/api/mine/issues')
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
