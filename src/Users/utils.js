import axios from 'axios';


const getUsers = async () => {
    let resp = await axios.get('https://jsonplaceholder.typicode.com/users');

    return resp.data;
}

const getTasks=async ()=>{
    let resp=await axios.get("https://jsonplaceholder.typicode.com/todos");
    return resp.data;
}

const getPosts=async ()=>{
    let resp=await axios.get("https://jsonplaceholder.typicode.com/posts");
    return resp.data;
    
}

const getTasksByUser=async (id,tasks)=>{

    let todos=await getTasksByID(id,tasks);

    return todos;
}

const getTasksByID=(id,tasks)=>{
    let todos = tasks.filter(x =>
        (x.userId == id))
        return todos
}
const getUsersWithTasksAndPosts=async ()=>{
    let users= await getUsers();
    let tasks=await getTasks();
    users.forEach(element => {
        tasks.filter(x=>
            x.userId)
    });
}



export default {getUsers,getTasks,getPosts,getTasksByUser}