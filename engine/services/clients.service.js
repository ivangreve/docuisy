const config = require("../config.json");
const jwt = require("jsonwebtoken");
const clientsRepository = require("../repositories/clients.repository");

async function authenticate({ email }) {
  const users = await clientsRepository.getUsers();
  const user = findByEmail(users, email);
  if (user) {
    return createUserToken(user);
  }
}

async function getAll() {
  const users = await clientsRepository.getUsers();
  return users;
}

async function getById(id) {
  const users = await clientsRepository.getUsers();
  const user = findById(users, id);
  if (!user) return [];
  return user;
}

async function getByName(name) {
  const users = await clientsRepository.getUsers();
  const user = findByName(users, name);
  if (!user) return [];
  return user;
}

function findByName(userArr, name) {
  const user = userArr.find((u) => u.name === name);
  return user;
}

function findById(userArr, id) {
  const user = userArr.find((u) => u.id === id);
  return user;
}

function findByEmail(userArr, email) {
  const user = userArr.find((u) => u.email === email);
  return user;
}

function createUserToken(user) {
  const token = jwt.sign({ id: user.id, role: user.role }, config.secret);
  return {
    ...user,
    token
  };
}

module.exports = {
  authenticate,
  getAll,
  getById,
  getByName,

  //Functions for Unit Testing
  findByName,
  findById,
  findByEmail,
  createUserToken
};
