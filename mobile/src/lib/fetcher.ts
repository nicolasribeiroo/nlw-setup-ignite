import axios from 'axios'

export const fetcher = axios.create({
  baseURL: 'http://192.168.0.106:3000'
})