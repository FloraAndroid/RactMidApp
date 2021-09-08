import { useState, useEffect } from 'react'
import TaskItemComp from './TaskItem';
import UserItemComp from './UserItem';
import utils from "./utils";

function UsersComp() {
  const search = (e) => {

  }

  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [taskOfUser, setTasksOfUser] = useState([]);
  useEffect(async () => {

    let users = await utils.getUsers();
    setUsers(users);
    let tasks = await utils.getTasks();
    setTasks(tasks)
    setTasksOfUser(tasks.slice(0, 3))
  }, [])
  return (
    <div className="App">
      Users List Page <br />
      Search <input type="text" onChange={(e) => search(e)} /><br />

      <div className="RightSection" >

        {taskOfUser.map(task => {
          return <TaskItemComp key={task.id} task={task} />
        })}

      </div>
      <div className="LeftSection">
        {users.map(user => {
          return <UserItemComp key={user.id} user={user} tasks={tasks} />
        })}
      </div>

    </div>
  );
}

export default UsersComp;
