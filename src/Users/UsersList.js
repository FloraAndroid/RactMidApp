import { useState, useEffect } from 'react'
import UserItemComp from './UserItem';
import utils from "./utils";

function UsersComp() {

  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);
  useEffect(async () => {

    let users = await utils.getUsers();
    setUsers(users);
    let tasks=await utils.getTasks();
    setTasks(tasks)
  }, [])
  return (
    <div className="App">
      Users List Page <br />

      {users.map(user => {
        return <UserItemComp key={user.id} user={user} tasks={tasks} />
      })}

    </div>
  );
}

export default UsersComp;
