import { useState, useEffect } from 'react'
import utils from './utils'
function UserItemComp(props) {

  const changeData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
}
  const otherData = () => {

  }
  const update = () => {

  }
  const deletUser = () => {

  }
  const sendData = (e) => {

    e.preventDefault();
  }


  const [tasks, setTasks] = useState([])
  const [user, setUser] = useState({});
  const [completed, setCompleted] = useState("Item Completed")
  useEffect(async () => {
    //setUser(props.user);
    let todos = await utils.getTasksByUser(props.user.id, props.tasks)
    let tasks = todos.slice(0, 2);
    console.log("tasks", tasks);
    console.log("todos", todos);


    tasks.forEach(x => {
      if (x.completed == false) {
        setCompleted("Item NonComplete");
      }
    })

    setTasks(tasks)


  }, [props.tasks])

  return (
    <div className={completed} >
       

      <form onSubmit={e => { sendData(e) }}>
        ID: {props.user.id}<br />
        Name:  <input value={props.user.name} type="text"  name="name" onChange={(e) => changeData(e) } /><br />
        Email:  <input value={user.email} type="text"  name="email" onChange={(e) => changeData(e) } /><br />
        <input type="submit" value="submit" />
      </form>
      <input type="button" value="Other Data" onClick={otherData} /> <br />



    </div >
  );
}

export default UserItemComp;
