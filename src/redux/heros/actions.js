import * as types from './types';

export const updateList = (list) => {
  return {
    type: types.UPDATE_LIST,
    payload: {list},
  };
};
