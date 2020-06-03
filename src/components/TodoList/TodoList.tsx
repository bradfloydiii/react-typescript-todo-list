import React from 'react';
import { TodoListItem } from '../TodoListItem/TodoListItem';
import { ITodoListProps } from '../../types';

export const TodoList: React.FC<ITodoListProps> = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          <TodoListItem
            key={index}
            id={index}
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        );
      })}
    </ul>
  );
};
