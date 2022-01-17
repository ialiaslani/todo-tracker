import axios from "axios";
import ReactDOM from 'react-dom';
import Error from "../Components/Common/Error";
import Loading from "../Components/Common/Loading";


const BackendMiddleware = async function (
    serviceFunction , payload ,
    options={})
{
    if (options.loading === undefined) { options.loading = 'FULL_PAGE' }
    if (options.handle_error === undefined) { options.handle_error = true }

    if (options.loading === 'FULL_PAGE') {

        ReactDOM.unmountComponentAtNode(document.getElementById('common'))

        ReactDOM.render(<Loading />,
            document.getElementById('common'))
    }


    axios.interceptors.request.use(async req => {

        req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
        return req
    })



    try {
        let res = await serviceFunction(payload) ;
        if (options.loading === 'FULL_PAGE') {

            ReactDOM.unmountComponentAtNode(document.getElementById('common'))

        }
        return res ;
    } catch (e) {
        // hide loading

        if(options.handle_error) {

            ReactDOM.unmountComponentAtNode(document.getElementById('common'))

            ReactDOM.render(<Error message={e.message}/>,
                document.getElementById('common'))
        }
    }
}

export default BackendMiddleware ;
