import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
import api from '../../Services/api/Login'
import BackendMiddleware from "../../Services/BackendMiddleWare";


const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reminder, setReminder] = useState(false);


    const onSubmit = async (e) => {
        e.preventDefault()

        if(!email || !password) {
            alert('Please Fill The Form')
            return ;
        }

        const { data } = await BackendMiddleware(api.loginUser, { email, password })

        localStorage.setItem('token', data.token)


        navigate("../tasks", { replace: true });

        setEmail('')
        setPassword('')
        setReminder(false)

    }

    return (
        <div>

            <form className='add-form' onSubmit={onSubmit}>
                <div className='form-control'>
                    <label>Email</label>
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label>Password</label>
                    <input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className='form-control form-control-check'>
                    <input
                        value={reminder}
                        checked={reminder}
                        onChange={e => setReminder(e.currentTarget.checked)}
                        type='checkbox'
                    />
                    <label>Remember Me</label>
                </div>

                <input
                    className='btn btn-block'
                    type='submit'
                    value='Enter'
                />
                <Link
                    className='btn btn-block'
                    to="/signup"
                >
                    Don't Have An Account
                </Link>
            </form>

        </div>
    )

}



export default Login