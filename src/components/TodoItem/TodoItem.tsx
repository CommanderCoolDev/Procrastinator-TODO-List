import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleRecord } from '../../store/actions';
import { ListItem } from './TodoItemStyles'; // Import styled component

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
    <ListItem onClick={handleToggle} completed={completed}>
      {text}
    </ListItem>
  );
};

export default TodoItem;