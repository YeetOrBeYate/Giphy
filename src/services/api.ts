import axios from 'axios'

const defaultClient = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  timeout: 10000,
  responseType: 'json'
})

const clients = {
  default: {
    client: defaultClient
  }
}

export default clients