import axios from 'axios'

const api = {
    getTasks() {
        return axios.get('task')
    },
    addTasks(payload) {
        return axios.post('task', payload)
    },
}

export default api