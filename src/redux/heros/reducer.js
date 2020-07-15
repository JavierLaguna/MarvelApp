import * as types from './types';

export const initialState = {
  list: [],
  loading: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.UPDATE_LIST:
      return {...state, list: action.payload.list};

    case types.SET_LOADING:
      return {...state, loading: action.payload.loading};

    default:
      return state;
  }
}
