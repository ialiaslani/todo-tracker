import { FaTimes } from 'react-icons/fa'
import {useContext} from "react";
import {ThemeContext} from "../Contexts/ThemeProvider";

const Task = ({ id, description, onDelete }) => {

    const [theme] = useContext(ThemeContext)


    return (
        <div className='task' style={{ backgroundColor: theme.taskBackgroundColor }}>
            <h3 style={{ color: theme.taskColor }}>{ description }<FaTimes  style={{ color: theme.deleteBtnColor }} onClick={() => onDelete(id)} /></h3>
        </div>
    )
}


export default Task