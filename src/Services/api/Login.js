import axios from 'axios'

const api = {
    loginUser(payload) {
        return axios.post('user/login', payload)
    },
    registerUser(payload) {
        return axios.post('user/register', payload)
    },
    logoutUser() {
        return axios.post('user/logout')
    },
}

export default api