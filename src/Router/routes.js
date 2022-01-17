// Components
import Login from '../Components/Login/Login'
import Signup from '../Components/Login/Signup'
import TodoTracker from '../Components/TodoTracker/TodoTracker'

// Routes
const Routes = [
    {
        path        : '/',
        element   : <Login />,
    },
    {
        path        : '/signup',
        element   : <Signup />,
    },
    {
        path        : '/tasks',
        element   : <TodoTracker />,
    }
]

//Export Routes
export default Routes