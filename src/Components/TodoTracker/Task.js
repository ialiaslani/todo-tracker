import { FaTimes } from 'react-icons/fa'

const Task = ({ id, description, onDelete }) => {

    return (
        <div className='task'>
            <h3>{ description }<FaTimes  style={{ color: 'red' }} onClick={() => onDelete(id)} /></h3>
        </div>
    )
}


export default Task