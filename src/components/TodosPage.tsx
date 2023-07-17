import axios from 'axios';
import React, {FC, useEffect, useState} from 'react';
import { ITodo } from '../types/types';
import List from './List';
import TodoItem from './TodoItem';

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    fetchTodos();
  }, [])

  async function fetchTodos() {
    try {
      const res = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=15')
      setTodos(res.data)
    } catch (err) {
      alert (err);
    }
  }

  return (
    <List
      items={todos}
      renderItem={(todo: ITodo) => 
        <TodoItem 
          todo={todo}    
          key={todo.id}
        />
      }
    />
  )
}

export default TodosPage;