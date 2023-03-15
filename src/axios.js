import axios from "axios"

const insatnce = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default insatnce;