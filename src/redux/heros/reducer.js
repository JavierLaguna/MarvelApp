import * as types from './types';

const initialState = {
  list: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.UPDATE_LIST:
      return {...state, list: action.payload.list};

    default:
      return state;
  }
}
