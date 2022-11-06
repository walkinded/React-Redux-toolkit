import { userAPI } from '../../servicers/UserService'
import UserItem from './UserItem'

const UserContainer = () => {
  const {data: users} = userAPI.useFetchAllUsersQuery(10)
  return (
    <div style={{border: '1px solid #000', display: 'grid', gap:'20px', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))'}}>
      <>
        {users && users.map(user => 
          <UserItem key={user.id} user={user}/>
        )}
      </>
    </div>
  )
}

export default UserContainer