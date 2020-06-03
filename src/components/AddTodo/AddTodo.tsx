import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { FormElement, IAddTodoProps } from '../../types';

export const AddTodo: React.FC<IAddTodoProps> = ({ addTodo }) => {
  const [value, setValue] = useState<string>('');
  const handleSubmit = (e: FormElement): void => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={value}
        onChange={e => setValue(e.target.value)}
        aria-labelledby="add-todo"
        required
      />{' '}
      <Button color='primary'>Add Todo</Button>
    </form>
  );
};
