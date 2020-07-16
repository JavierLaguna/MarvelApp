import {createSelector} from 'reselect';
import {initialState} from './reducer';

const selectReducer = (state) => state.heroes || initialState;

export const selectHeroes = createSelector(
  selectReducer,
  (state) => state.list,
);

export const selectTotal = createSelector(
  selectReducer,
  (state) => state.total,
);

export const selectLoading = createSelector(
  selectReducer,
  (state) => state.loading,
);

export const selectHero = createSelector(selectReducer, (state) => state.item);
