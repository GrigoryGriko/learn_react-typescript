import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import List from './components/List';
import TodoItem from './components/TodoItem';
import UserItem from './components/UserItem';
import EventsExample from './components/EventsExample'
import { ITodo, IUser } from './types/types';
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [todos, setTodos] = useState<ITodo[]>([])

  return (
    <div>
      <EventsExample/>

      <Card
      onClick={() => console.log('нажатие произошло')}
        variant={CardVariant.outlined}
        width='200px'
        height='200px'
      >
        <button>Кнопка</button>
      </Card>

    </div>
  );
};

export default App;