import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleRecord } from '../../store/actions';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleRecord(id));
  };

  return (
    <li onClick={handleToggle} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {text}
    </li>
  );
};

export default TodoItem;
