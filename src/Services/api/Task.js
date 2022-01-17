import axios from 'axios'

const api = {
    getTasks() {
        return axios.get('task')
    },
    addTasks(payload) {
        return axios.post('task', payload)
    },
    deleteTask(id) {
        return axios.delete('task/' + id)
    },
}

export default api