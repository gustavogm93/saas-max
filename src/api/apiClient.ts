import Axios from 'axios'

const apiClient = Axios.create({
    baseURL: '',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    withCredentials: true,
})

export default apiClient
