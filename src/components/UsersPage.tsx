import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { IUser } from '../types/types';
import List from './List';
import UserItem from './UserItem';

const UsersPage: FC = () => {
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
    <List
      items={users}
      renderItem={(user: IUser) => 
        <UserItem 
          user={user}    
          key={user.id}
        />
      }
    />
  )
}

export default UsersPage;