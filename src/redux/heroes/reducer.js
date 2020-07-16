import * as types from './types';

export const initialState = {
  list: [],
  total: 0,
  loading: false,
  item: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.UPDATE_LIST:
      return {...state, list: action.payload.list, total: action.payload.total};

    case types.SET_LOADING:
      return {...state, loading: action.payload.loading};

    case types.SET_ITEM:
      return {...state, item: action.payload.item};

    default:
      return state;
  }
}
