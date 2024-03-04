export const ADD_RECORD = 'ADD_RECORD';
export const TOGGLE_RECORD = 'TOGGLE_RECORD';
export const SET_FILTER = 'SET_FILTER';

export const addRecord = (text: string) => ({
  type: ADD_RECORD as typeof ADD_RECORD,
  text
});

export const toggleRecord = (id: number) => ({
  type: TOGGLE_RECORD as typeof TOGGLE_RECORD,
  id
});

export const setFilter = (filter: string) => ({
  type: SET_FILTER as typeof SET_FILTER,
  filter
});
