import axios from 'axios'

let url = new URL('/' , 'https://api-nodejs-todolist.herokuapp.com') ;

axios.defaults.baseURL =  url.href ;




