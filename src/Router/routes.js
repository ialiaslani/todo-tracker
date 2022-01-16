// Components
import Login from '../Components/Login/Login'
import Signup from '../Components/Login/Signup'
import Tasks from '../Components/TodoTracker/Tasks'

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
        element   : <Tasks />,
    }
]

//Export Routes
export default Routes