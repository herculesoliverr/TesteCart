import axios from 'axios'

const Axios = axios.create({
  baseURL: 'http://www.mocky.io/v2'
})

export { Axios as Api }
