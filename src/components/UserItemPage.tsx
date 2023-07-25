import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { IUser } from '../types/types';
import {useParams, useNavigate} from 'react-router-dom';

type UserItemPageParams = Record<string, string> & { 
  id: string;
};

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null)
  const params = useParams<UserItemPageParams>()
  const navigate = useNavigate()
  
  useEffect(() => {
    fetchUser();
  }, [])

  async function fetchUser() {
    try {
      const res = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
      setUser(res.data)
    } catch (err) {
      alert (err);
    }
  }

  return (
    <div>
      <button onClick={() => navigate('/users')} style={{cursor: 'pointer'}}>Назад</button>
      <h1>Страница пользователя {user?.name ? user?.name : '...загрузка'}</h1>
      <div>
        {user?.email}
      </div>
      <div>
        {user?.address.city} {user?.address.street} {user?.address.zipcode}
      </div>
    </div>
  )
}

export default UserItemPage;