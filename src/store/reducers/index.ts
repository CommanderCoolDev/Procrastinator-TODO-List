import { combineReducers } from 'redux';
import recordReducer from './recordReducer';

export const SET_FILTER = 'SET_FILTER';

export const setFilter = (filter: string) => ({
  type: SET_FILTER as typeof SET_FILTER,
  filter
});

type ActionType = ReturnType<typeof setFilter>;

const filterReducer = (state = 'all', action: ActionType): string => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  records: recordReducer,
  filter: filterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
