import Task from "./Task";
import {useState,useEffect} from "react";
import BackendMiddleware from "../../Services/BackendMiddleWare";
import api from "../../Services/api/Task";
import apiLogin from "../../Services/api/Login";
import AddTask from "./AddTask";
import { useNavigate  } from "react-router-dom";

const Tasks = () => {

    const [tasks, setTasks] = useState([])
    const navigate = useNavigate();

    const getAllTasks = async () => {

        const { data } = await BackendMiddleware(api.getTasks)

        if(data.data) setTasks(data.data)

    }

    useEffect( () => {
        getAllTasks()
    }, []);



    const addTask = async (payload) => {

        await BackendMiddleware(api.addTasks, payload)

        await getAllTasks()

    }



    const deleteTask = async (id) => {

        console.log(id)

        await BackendMiddleware(api.deleteTask(id))

        await getAllTasks()

    }

    const logout = async () => {

        await BackendMiddleware(apiLogin.logoutUser, null)

        localStorage.removeItem('token')

        navigate("../", { replace: true });


    }


    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2>Todo Tracker</h2>
                <button className='btn' onClick={logout}>Logout</button>
            </div>
            <AddTask onAdd={addTask} />
            <>
                {
                    tasks.length > 0 ? tasks.map(({_id, description}) => (
                        <Task
                            key={_id}
                            id={_id}
                            description={description}
                            onDelete={deleteTask}
                        />
                    )) : 'No Tasks To Show'
                }
            </>
        </div>
    )
}


export default Tasks