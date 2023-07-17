import React, {FC} from 'react';
import { IUser } from '../types/types';

interface UserItemProps {
  user: IUser;
}

const UserList: FC<UserItemProps> = ({user}) => {
  return (
    <div style={{padding: 5, border: '1px solid gray'}}>
      {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
    </div>
  )
}

export default UserList;