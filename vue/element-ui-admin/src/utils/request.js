import axios from 'axios'

const service = axios.create({
    baseURL: 'http://api-dev',
    timeOut: 5000
})

export default service