import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWE0YTE3NmQxYjUwNDcxNDJkMzJjOCIsImlzUHVibGlzaGVyIjp0cnVlLCJpYXQiOjE2NTQ3ODA2NDYsImV4cCI6MTY1NTAzOTg0Nn0.PSvaDI799o-iuPEVTxgp9k6IMlvxcw3GkMvRBJ9V-aI"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});


export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`},
})
