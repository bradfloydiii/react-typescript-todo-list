import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { TodoListItem } from './TodoListItem';

describe('<TodoListItem />', () => {
  test('renders learn react link', () => {
    const todo = { text: 'Test Todo', complete: false };
    const toggleTodo = jest.fn();
    const removeTodo = jest.fn();
    render(
      <TodoListItem
        id={1}
        todo={todo}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
      />
    );
    expect(screen.getByText(/Test/i)).toBeInTheDocument();
  });

  test('should call toggleTodo onChange', () => {
    const todo = { text: 'Test Todo', complete: false };
    const toggleTodo = jest.fn();
    const removeTodo = jest.fn();
    render(
      <TodoListItem
        id={1}
        todo={todo}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
      />
    );
    fireEvent.click(screen.getByLabelText(/Test/i));
    expect(toggleTodo).toHaveBeenCalled();
  });
});
