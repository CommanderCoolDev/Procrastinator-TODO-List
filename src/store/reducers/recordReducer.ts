import { addRecord, ADD_RECORD, toggleRecord, TOGGLE_RECORD } from '../actions';

export interface Record {
  id: number;
  text: string;
  completed: boolean;
}

type ActionType = ReturnType<typeof addRecord | typeof toggleRecord>;

const initialState: Record[] = [];

const recordReducer = (state = initialState, action: ActionType): Record[] => {
  switch (action.type) {
    case ADD_RECORD:
      return [
        ...state,
        {
          id: state.length + 1,
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_RECORD:
      return state.map(record =>
        record.id === action.id ? { ...record, completed: !record.completed } : record
      );
    default:
      return state;
  }
};

export default recordReducer;
