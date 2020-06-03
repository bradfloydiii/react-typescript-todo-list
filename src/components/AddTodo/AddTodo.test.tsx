import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AddTodo } from './AddTodo';

describe('<AddTodo)', () => {
  test('should addTodo when form is submitted', () => {
    const addTodo = jest.fn();
    render(<AddTodo addTodo={addTodo} />);
    fireEvent.click(screen.getByText(/Add Todo/i));
    expect(addTodo).toHaveBeenCalled();
  });

  // xtest('should clear the input field when a todo is added', () => {});
});
