import React from 'react';
import { ITodoListItemProps } from '../../types';
import './TodoListItem.css';

export const TodoListItem: React.FC<ITodoListItemProps> = ({
  id,
  todo,
  toggleTodo,
  removeTodo
}) => {
  return (
    <li>
      <label
        htmlFor={'checkbox-' + id}
        className={todo.complete ? 'complete' : undefined}
      >
        {todo.text}
      </label>{' '}
      <input
        id={'checkbox-' + id}
        type='checkbox'
        checked={todo.complete}
        onChange={() => {
          toggleTodo(todo);
        }}
      />{' '}
      <button
        className='btn btn-danger'
        onClick={() => {
          removeTodo(todo);
        }}
      >
        X
      </button>
    </li>
  );
};
