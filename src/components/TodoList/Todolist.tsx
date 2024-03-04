import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/reducers';
import { addRecord, setFilter } from '../../store/actions';
import TodoItem from '../TodoItem/TodoItem';
import { Wrapper, InputForm, Input, Button } from './TodolistStyles'; // Import styled components

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
    <Wrapper>
      <h1>Procrastinator List</h1>
      <InputForm onSubmit={handleSubmit}>
        <Input type="text" value={inputValue} onChange={handleChange} />
        <Button type="submit">Add Todo</Button>
      </InputForm>
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
        <Button onClick={() => dispatch(setFilter('all'))}>All</Button>
        <Button onClick={() => dispatch(setFilter('completed'))}>Completed</Button>
        <Button onClick={() => dispatch(setFilter('current'))}>Current</Button>
      </div>
      <div>
        Completed: {records.filter(record => record.completed).length}
      </div>
      <div>
        Uncompleted: {records.filter(record => !record.completed).length}
      </div>
      <div className='bgHolder'></div>
    </Wrapper>
  );
};

export default TodoList;