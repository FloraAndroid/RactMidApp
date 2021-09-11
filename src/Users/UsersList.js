import { useState, useEffect } from 'react'
import TaskItemComp from './TaskItem';
import UserItemComp from './UserItem';
import utils from "./utils";

function UsersComp(props) {
  const search = (e) => {
    let value=e.target.value.toLowerCase()
   console.log("value",e.target.value)
   let arra=users.filter(x=>(x.name.toLowerCase().includes(value)||x.email.toLowerCase().includes(value)))
   setUsersToShow(arra);
  }
  const showTasks = (data) => {
    console.log("data from child",data)
    setTasksOfUser(data)

  }
  const addUser=()=>{

  }

  const [users, setUsers] = useState([]);
  const[ usersToShow,setUsersToShow]=useState([]);
  const [tasks, setTasks] = useState([]);
  const [taskOfUser, setTasksOfUser] = useState([]);
  useEffect(async () => {

    let users = await utils.getUsers();
    setUsers(users);
    setUsersToShow(users)
    let tasks = await utils.getTasks();
    setTasks(tasks)
  }, [])
  return (
    <div style={{justifyContent:'space-between' ,display:'flex-wrap'}}>
     Search <input  type="text" onChange={(e) => search(e)} /> 
      <input type="button" value="Add" onClick={addUser}></input>
      <br />


      <div className="RightSection" >

        {taskOfUser.map(task => {
          return <TaskItemComp key={task.id} task={task} />
        })}

      </div>
      <div className="LeftSection">
        {usersToShow.map(user => {
          return <UserItemComp callback={data => { showTasks(data) }} key={user.id} user={user} tasks={tasks} />
        })}
      </div>

    </div>
  );
}

export default UsersComp;
