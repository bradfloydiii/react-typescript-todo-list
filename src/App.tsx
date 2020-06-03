import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { TodoList } from './components/TodoList/TodoList';
import { AddTodo } from './components/AddTodo/AddTodo';
import { ITodo, ToggleTodo, RemoveTodo } from './types';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (text: string) => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  const removeTodo: RemoveTodo = selectedTodo => {
    const newTodos: ITodo[] = todos.filter(todo => todo !== selectedTodo);
    setTodos(newTodos);
  };

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map((todo: ITodo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <Container fluid={true}>
      <Row>
        <Col>
          <h3>Todo List</h3>
        </Col>
      </Row>
      <Row form={true}>
        <Col>
          <AddTodo addTodo={addTodo} />
        </Col>
      </Row>
      <Row>
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      </Row>
    </Container>
  );
};

export default App;
