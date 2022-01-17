import Task from "./Task";
import {useState,useEffect} from "react";
import BackendMiddleware from "../../Services/BackendMiddleWare";
import api from "../../Services/api/Task";
import AddTask from "./AddTask";
import Field from "./Field";

const Tasks = () => {

    const [tasks, setTasks] = useState([])

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


    return (
        <div>
            <AddTask onAdd={addTask} />
            <Field>
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
            </Field>
        </div>
    )
}


export default Tasks