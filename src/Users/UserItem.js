import { useState, useEffect } from 'react'
import utils from './utils'
function UserItemComp(props) {
  const [tasks, setTasks] = useState([])
  const [completed, setCompleted] = useState(true)
  useEffect(async () => {
    let todos = props.tasks.filter(x =>
      (x.userId == props.user.id))

   // let todos = await utils.getTasksByUser(props.user.id, props.tasks)
    let tasks = todos.slice(0, 2);
    console.log("tasks", tasks);
    console.log("todos", todos);

    
      tasks.forEach(x => {
        if (x.completed == false) {
          setCompleted(false);
        }
      })
    
    setTasks(tasks)


  }, [props.tasks])

  return (
    <div className="App">

      {props.user.name} ...<br />

      {completed ? "Completed" : "NotCompleted"}<br />



    </div>
  );
}

export default UserItemComp;
