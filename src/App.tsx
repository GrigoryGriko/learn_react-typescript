import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import List from './components/List';
import UserItem from './components/UserItem';
import UserList from './components/UserList';
import { IUser } from './types/types';

const App = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetchUsers();
  }, [])

  async function fetchUsers() {
    try {
      const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(res.data)
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
    </div>
  );
};

export default App;