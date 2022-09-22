import React, {useState} from 'react';

import Adduser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
// import Model from './components/UI/ErrorModal';


function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString()},]
    })
  }

  return (
    <div>
      <Adduser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
      {/* <Model /> */}
    </div>
  );
}

export default App;
