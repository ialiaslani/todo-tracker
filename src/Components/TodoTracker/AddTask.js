import {useContext} from "react";
import {TaskContext} from "../Contexts/TasksProvider";
import useLocalStorage from "../../Hooks/useLocalStorage";

const AddTask = () => {

    const [ tempTask, setTemTask ] = useLocalStorage('task', '')
    const { addTask } = useContext(TaskContext)


    const onSubmit = (e) => {
        e.preventDefault()

        if(!tempTask) {
            alert('Please Add Task')
            return ;
        }

        addTask({ description: tempTask })


        setTemTask('')

    }


    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input
                    type='text'
                    placeholder='Add Task'
                    value={tempTask}
                    onChange={e => setTemTask(e.target.value)}
                />
            </div>

            <input
                style={{ backgroundColor: 'green' }}
                className='btn btn-block'
                type='submit'
                value='Save Task'
            />
        </form>
    )

}

export default AddTask