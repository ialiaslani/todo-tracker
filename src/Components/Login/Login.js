import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
import api from '../../Services/api/Login'
import BackendMiddleware from "../../Services/BackendMiddleWare";
import { useForm } from 'react-hook-form'


const Login = () => {

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm()
    const [reminder, setReminder] = useState(false);

    const onSubmit = async (user) => {

        if(!user.email || !user.password) {
            alert('Please Fill The Form')
            return ;
        }

        const { data } = await BackendMiddleware(api.loginUser, user)

        localStorage.setItem('token', data.token)


        navigate("../tasks", { replace: true });

        setReminder(false)

    }

    return (
        <div>

            <form className='add-form' onSubmit={handleSubmit(onSubmit)}>
                <div className='form-control'>
                    <label>Email</label>
                    <input
                        type='email'
                        placeholder='Email'
                        {...register("email", { required: true })}
                    />
                </div>
                <div className='form-control'>
                    <label>Password</label>
                    <input
                        type='password'
                        placeholder='Password'
                        {...register("password", { required: true, minLength: 8 })}
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