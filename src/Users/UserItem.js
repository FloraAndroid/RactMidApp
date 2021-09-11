import { useState, useEffect } from 'react'
import utils from './utils'
function UserItemComp(props) {


  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState({});
  const [completed, setCompleted] = useState("Item Completed");
  const [tasksShown, setTasksShown] = useState(false);
  const [dataShown, setDataShown] = useState(false);
  const [bgColor, setbgColor] = useState("white")

  const changeData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const update = () => {

  }
  const deletUser = () => {

  }
  const sendData = (e) => {

    e.preventDefault();
  }
  const otherData = () => {

    setDataShown(!dataShown)
  }
  const showTasks = () => {
    if (!tasksShown) {
      setbgColor("orange")
      props.callback([...tasks])
    }
    else {
      setbgColor("white")
      props.callback([])
    }
    setTasksShown(!tasksShown);
  }

  useEffect(async () => {
    setUser(props.user);
    let todos = await utils.getTasksByUser(props.user.id, props.tasks)
    let tasks = todos;
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
    <div className={completed} style={{ backgroundColor: bgColor }}>

      <form onSubmit={e => { sendData(e) }}>
        <input style={{ backgroundColor: "white" }} type="button" onClick={showTasks} value={"ID: " + props.user.id} /><br />
        Name: <input value={user.name} type="text" name="name" onChange={(e) => changeData(e)} /><br />

        Email: <span></span> <input value={user.email} type="text" name="email"

          onChange={(e) => changeData(e)} /><br />
        <input type="button" value="Other Data" onClick={otherData} /> <br />
        {dataShown &&
          <div className="Item OtherData">
            <label>Street: </label><input type="text" name="street" /><br/>
            <label>City: </label><input  type="text" name="city" /><br/>
            <label>ZipCode: </label><input value={user.email} type="text" name="zipCode" /><br/>
          </div>
        }
        <input style={{float:"right"}} type="submit" name="delete" value="delete" />
        <input type="submit" name="update" value="update" />


      </form>

    </div >
  );
}

export default UserItemComp;
