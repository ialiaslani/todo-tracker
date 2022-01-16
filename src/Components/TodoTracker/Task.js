import { FaTimes } from 'react-icons/fa'

const Task = ({ description }) => {

    return (
        <div className='task'>
            <h3>{ description }<FaTimes  style={{ color: 'red' }} /></h3>
        </div>
    )
}


export default Task