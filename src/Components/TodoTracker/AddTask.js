import {useContext} from "react";
import {TaskContext} from "../Contexts/TasksProvider";

const AddTask = () => {

    const { addTask, tempTask, setTemTask } = useContext(TaskContext)


    const onSubmit = (e) => {
        e.preventDefault()

        if(!tempTask) {
            alert('Please Add Task')
            return ;
        }

        addTask({ description: tempTask })


        saveTaskTemporary('')

    }

    const saveTaskTemporary = (data) => {

        setTemTask(data)

        localStorage.setItem('tempTask', tempTask)

    }
    

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input
                    type='text'
                    placeholder='Add Task'
                    value={tempTask}
                    onChange={e => saveTaskTemporary(e.target.value)}
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