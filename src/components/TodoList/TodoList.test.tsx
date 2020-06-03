import React from 'react';
import { render, screen } from '@testing-library/react';
import { TodoList } from './TodoList';

describe('<TodoList)', () => {
  test('renders proper amount of todos', () => {
    const todos = [
      { text: 'Todo 1', complete: false },
      { text: 'Todo 2', complete: false },
      { text: 'Todo 3', complete: false }
    ];
    const toggleTodo = jest.fn();
    const removeTodo = jest.fn();
    render(<TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />);
    expect(screen.getAllByText(/Todo/i).length).toEqual(3);
  });
});
