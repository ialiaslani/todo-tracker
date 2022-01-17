import AddTask from "./AddTask";
import Field from "./Field";
import { TaskProvider} from "../Contexts/TasksProvider";
import Tasks from "./Tasks";

const TodoTracker = () => {

    return (
        <TaskProvider>
            <AddTask />
            <Field>
                <Tasks />
            </Field>
        </TaskProvider>
    )
}


export default TodoTracker