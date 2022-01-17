import BackendMiddleware from "../../Services/BackendMiddleWare";
import api from "../../Services/api/Login";
import { useNavigate  } from "react-router-dom";
import {ThemeContext} from "../Contexts/ThemeProvider";
import {useContext} from "react";

const Header = () => {

    const navigate = useNavigate();
    const [theme, setTheme] = useContext(ThemeContext)

    const logout = async () => {

        await BackendMiddleware(api.logoutUser, null)

        localStorage.removeItem('token')

        navigate("../", { replace: true });


    }


    const changeTheme = () => {


        if(theme.mode === 'dark') {

            setTheme({
                mode: 'light',
                taskBackgroundColor: 'black',
                taskColor: 'white',
                deleteBtnColor: 'orange'
            })

        } else if (theme.mode === 'light') {

            setTheme({
                mode: 'dark',
                taskBackgroundColor: 'grey',
                taskColor: 'black',
                deleteBtnColor: 'red'
            })


        }

    }

    return (

            <header className='header'>
                <h2>Todo Tracker</h2>

                <div>

                    <button className='btn' onClick={changeTheme}>Change Theme</button>

                    {  localStorage.getItem('token') && (<button className='btn' onClick={logout} style={{ backgroundColor: 'red' }}>Logout</button>)}

                </div>

            </header>

    )
}


export default Header