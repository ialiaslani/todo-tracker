import { TaskContext } from "../Contexts/TasksProvider";
import {useContext} from "react";
import Task from "./Task";

const Tasks = () => {

    const { tasks, deleteTask } = useContext(TaskContext)

    return (
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
    )
}


export default Tasks