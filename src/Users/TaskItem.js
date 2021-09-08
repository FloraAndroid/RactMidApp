import { useState, useEffect } from 'react'
function TaskItemComp(props) {


  const [task, setTask] = useState({})
  useEffect(() => {
    let task = props.task;
    setTask(task)

  }, [props.task])

  return (
    < div  className="Item Task" >

      Title : {task.title} <br/>
      Completed : {task.completed?"True":"False"}
    </div >
  );
}

export default TaskItemComp;
