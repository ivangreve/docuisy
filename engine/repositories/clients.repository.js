const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const getUsers = async () => {
  try {
    const users = await axios.get(process.env.API_USER_AUTH);
    return users.data.clients;
  } catch {
    throw "Error requesting external API";
  }
};

module.exports = {
  getUsers
};
