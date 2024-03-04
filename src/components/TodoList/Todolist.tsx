import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/reducers';
import { addRecord, setFilter } from '../../store/actions';
import TodoItem from '../TodoItem/TodoItem';

const TodoList: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const records = useSelector((state: RootState) => state.records);
  const filter = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      dispatch(addRecord(inputValue));
      setInputValue('');
    }
  };

  const filteredRecords = () => {
    switch (filter) {
      case 'completed':
        return records.filter(record => record.completed);
      case 'current':
        return records.filter(record => !record.completed);
      default:
        return records;
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {filteredRecords().map(record => (
          <TodoItem
            key={record.id}
            id={record.id}
            text={record.text}
            completed={record.completed}
          />
        ))}
      </ul>
      <div>
        <button onClick={() => dispatch(setFilter('all'))}>All</button>
        <button onClick={() => dispatch(setFilter('completed'))}>Completed</button>
        <button onClick={() => dispatch(setFilter('current'))}>Current</button>
      </div>
      <div>
        Completed: {records.filter(record => record.completed).length}
      </div>
      <div>
        Uncompleted: {records.filter(record => !record.completed).length}
      </div>
    </div>
  );
};

export default TodoList;
