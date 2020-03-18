import axios from 'axios'
import config from '../Lib/project'

const baseURL = config.creditAppService
export const addCard = (data) => {
    return axios.post(baseURL+'add', data)
}

export const getAllCards = () => {
    return axios.get(baseURL+'getAll')
}