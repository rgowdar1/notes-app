import Axios from 'axios'

const axios=Axios.create({
    baseURL:'http://localhost:3100'
})

export default axios