import {useState} from "react";

const AddTask = ({onAdd}) => {

    const [description, setDescription] = useState('');
    
    
    const onSubmit = (e) => {
        e.preventDefault()

        if(!description) {
            alert('Please Add Task')
            return ;
        }

        onAdd({ description })


        setDescription('')

    }
    

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input
                    type='text'
                    placeholder='Add Task'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
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