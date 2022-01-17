import {createContext, useEffect, useState} from "react";
import BackendMiddleware from "../../Services/BackendMiddleWare";
import api from "../../Services/api/Task";


export const TaskContext  = createContext()

export const TaskProvider = ({ children }) => {


    const [tasks, setTasks] = useState([])
    const [tempTask, setTemTask] = useState('')

    const getAllTasks = async () => {

        const { data } = await BackendMiddleware(api.getTasks)


        if(data.data) setTasks(data.data)

    }

    useEffect( () => {

        const data = localStorage.getItem('tempTask')

        setTemTask( data ? data : '')

        getAllTasks()
    }, []);



    const addTask = async (payload) => {

        await BackendMiddleware(api.addTasks, payload)

        await getAllTasks()

    }



    const deleteTask = async (id) => {


        await BackendMiddleware(api.deleteTask(id))


        await getAllTasks()


    }


    return (
        <TaskContext.Provider value={ { tasks, setTasks, addTask, deleteTask, tempTask, setTemTask } } children={children} />
    );
}