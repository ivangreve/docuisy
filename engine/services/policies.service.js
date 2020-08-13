const policiesRepository = require("../repositories/policies.repository");

async function getAll() {
  const policies = await policiesRepository.getPolicies();
  return policies;
}

async function getById(id) {
  const policies = await policiesRepository.getPolicies();
  const policie = findByPolicieId(policies, id);
  if (!policie) return [];
  return policie;
}

async function getByClientId(id) {
  const policies = await policiesRepository.getPolicies();
  const policiesFiltered = filterByClientId(policies, id);
  if (!policiesFiltered) return [];
  return policiesFiltered;
}

function filterByClientId(policiesArr, clientId) {
  const policies = policiesArr.filter((u) => u.clientId === clientId);
  return policies;
}

function findByPolicieId(policiesArr, id) {
  const policie = policiesArr.find((u) => u.id === id);
  return policie;
}

module.exports = {
  getAll,
  getByClientId,
  getById,

  //Functions for Unit Testing
  filterByClientId,
  findByPolicieId
};
