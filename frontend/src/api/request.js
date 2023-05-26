import { BASE_URL } from "./baseURL";
import axios from "axios"

export const getAll = async() => {
    let Gym;
    await axios.get(`${BASE_URL}/gym`)
    .then(res => {
        Gym = res.data
    })
    return Gym
}

export const getGymById = async(id) => {
    let Gym;
    await axios.get(`${BASE_URL}/gym/${id}`)
    .then(res => {
        Gym = res.data
    })
    return Gym
}

export const deleteGym = async(id) => {
    let message;
    await axios.delete(`${BASE_URL}/gym/${id}`)
    .then(res => {
        message = res.data
    })
    return message
}

export const postGym = (load) => {
    axios.post(`${BASE_URL}/gym`,load)
}
