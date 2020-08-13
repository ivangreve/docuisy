var axios = require("axios")

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000"
})

module.exports = axiosInstance
