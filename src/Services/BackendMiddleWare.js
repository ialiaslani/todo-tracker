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

    const token = localStorage.getItem('token');
    if(token) {
        axios.interceptors.request.use(function (config) {
            config.headers.Authorization =  `Bearer ${token}`;

            return config;
        });
    } else {
        axios.interceptors.request.use(function (config) {
            config.headers.Authorization =  null;

            return config;
        });
    }

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

//
//
// /**
//  * handle error from axios response
//  * @param error - axios error object
//  */
// function handleError(error) {
//
//     let errMsg =  ''
//
//     // if response is not defined then connection failed
//     if (!error.response) {
//         errMsg = "خطا در ارتباط با سامانه. لطفا صفحه را مجددا بارگذاری نمایید." ;
//     } else {
//
//         errMsg = getErrorMessage(error.response) ;
//
//         if (error.response.status === 401 &&
//             error.response.data.type !== 'WRONG_USER_PASS') {
//
//         }
//
//         if (error.response.status === 403 &&
//             error.response.data.type !== 'WRONG_USER_PASS') {
//             errMsg = error.response.data.message ;
//         }
//
//     }
//
//     console.log({
//         type: 'ERROR_FOR_USER' ,
//         message: errMsg
//     }) ;
// }
//
//
// /**
//  * @param error_response - axios error response
//  * @returns {string} return erorr response to show to user
//  */
// function getErrorMessage(error_response) {
//     let errMsg = '' ;
//
//     if (error_response.status === 406) {
//         errMsg = error_response.data.message[0].message ;
//     } else if (error_response.status === 400 &&
//         error_response.data.detailedMessage === "user is deactivated, please call with system admin."
//     ) {
//         errMsg = "کاربر غیر فعال است، لطفا با مدیر سامانه تماس بگیرید" ;
//     }  else {
//         errMsg = error_response.data.message ;
//     }
//
//     return errMsg ;
// }


export default BackendMiddleware ;
