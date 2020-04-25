import React, { Fragment, useState } from 'react';

export const AddTodo: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  return (
    <Fragment>
      <h3>AddTodo</h3>
    </Fragment>
  );
};
