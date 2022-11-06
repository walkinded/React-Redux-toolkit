import { useCallback, useEffect, useMemo } from 'react';
import './App.css';
import UserContainer from './components/Users/UserContainer';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { IUser } from './models/IUser';
import { fetchUsers } from './store/reducers/ActionCreators';

function App() {
  // const dispatch = useAppDispatch()
  // const { users, isLoading, error } = useAppSelector(state => state.userReducer)

  // const userList = useMemo(() => {
  //   console.log('enter');
  //   return (
  //     <>
  //       {users.map((u: IUser) => {
  //         console.log('render');
  //           <div key={u.id}>
  //             <p>{u.name}</p>
  //             <p>{u.email}</p>
  //           </div>
  //         })  
  //       }
  //     </>
  //   )
  // },[])

  // useEffect(() => {
  //   dispatch(fetchUsers())
  // },[])



  return (
    <div className="App">
      {/* {isLoading && <h1>Идет загрузка</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)} */}
        <UserContainer/>
    </div>
  );
}

export default App;
