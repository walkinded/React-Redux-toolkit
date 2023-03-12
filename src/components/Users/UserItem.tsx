import { FC } from 'react';
import { IUser } from '../../models/IUser';

interface IUserItem {
  user: IUser;
}

const UserItem: FC<IUserItem> = ({ user }) => {
  return (
    <div style={{ border: '1px solid #000' }}>
      {user.id} {user.name}
    </div>
  );
};

export default UserItem;
