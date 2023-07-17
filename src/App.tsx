import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import List from './components/List';
import TodoItem from './components/TodoItem';
import UserItem from './components/UserItem';
import UserList from './components/UserList';
import { ITodo, IUser } from './types/types';

const App = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, [])

  async function fetchUsers() {
    try {
      const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(res.data)
    } catch (err) {
      alert (err);
    }
  }

  async function fetchTodos() {
    try {
      const res = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=15')
      setTodos(res.data)
    } catch (err) {
      alert (err);
    }
  }

  return (
    <div>
      <Card
      onClick={() => console.log('нажатие произошло')}
        variant={CardVariant.outlined}
        width='200px'
        height='200px'
      >
        <button>Кнопка</button>
      </Card>

      <List
        items={users}
        renderItem={(user: IUser) => 
          <UserItem 
            user={user}    
            key={user.id}
          />
        }
      />

      <List
        items={todos}
        renderItem={(todo: ITodo) => 
          <TodoItem 
            todo={todo}    
            key={todo.id}
          />
        }
      />
    </div>
  );
};

export default App;