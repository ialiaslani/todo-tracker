import { Link } from 'react-router-dom'
import {useState} from "react";
import BackendMiddleware from "../../Services/BackendMiddleWare";
import api from "../../Services/api/Login";


const Signup = ({text, color, onClick}) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onSubmit = async (e) => {
        e.preventDefault()

        if(!email || !password || !name || !age) {
            alert('Please Fill The Form')
            return ;
        }

        const { data } = await BackendMiddleware(api.registerUser, { name, age: Number(age), email, password })

        localStorage.setItem('token', data.token)

        setName('')
        setEmail('')
        setPassword('')
        setAge(0)

    }

    return (
        <div>

            <form className='add-form' onSubmit={onSubmit}>
                <div className='form-control'>
                    <label>Name</label>
                    <input
                        type='text'
                        placeholder='Name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label>Age</label>
                    <input
                        type='number'
                        placeholder='Age'
                        value={age}
                        onChange={e => setAge(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label>Email</label>
                    <input
                        type='text'
                        placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label>Password</label>
                    <input
                        type='text'
                        placeholder='Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>


                <input
                    className='btn btn-block'
                    type='submit'
                    value='Register'
                />
                <Link
                    className='btn btn-block'
                    to="/"
                >
                    Have An Account
                </Link>
            </form>

        </div>
    )

}



export default Signup