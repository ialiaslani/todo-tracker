import { FaTimes } from 'react-icons/fa'
import {useState} from "react";

const Error = ({ message }) => {

    const [showError, setShowError] = useState(true)


    return (
        showError &&
        (
            <div className='error'>
                <h4 style={{ color: 'white' }}>{ message }</h4>
                <FaTimes  style={{ color: 'white', cursor: 'pointer' }} onClick={() => setShowError(false)} />
            </div>
        )
    )
}


export default Error