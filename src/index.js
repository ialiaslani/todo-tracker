import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Plugins/axios';
import App from './App';
import reportWebVitals from './reportWebVitals';
import routes from './Router/routes'
import history from "./Router/history";



const redirect = () => {

    if(localStorage.getItem('token')) {

        history.push('/tasks');

    } else {

        history.push('/');

    }

}

redirect()

ReactDOM.render(
  <React.StrictMode>
    <App routes={routes} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
