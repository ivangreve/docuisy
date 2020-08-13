const express = require("express");
const router = express.Router();
const clientService = require("../services/clients.service");
const policiesService = require("../services/policies.service");
const authorize = require("../helpers/authorize");
const Role = require("../helpers/role");
const asyncMiddleware = require("../helpers/asyncMiddleware");

// Clients Controller ROUTES
router.get(
  "/",
  authorize([Role.Admin, Role.User]),
  asyncMiddleware(async (req, res, next) => getAll(req, res, next))
); // Additional Service => Only Admin

router.get(
  "/Id/:id",
  authorize([Role.User, Role.Admin]),
  asyncMiddleware(async (req, res, next) => getById(req, res, next))
); // Get user data filtered by user id -> Can be accessed by users with role "users" and "admin"

router.get(
  "/Name/:name",
  authorize([Role.User, Role.Admin]),
  asyncMiddleware(async (req, res, next) => getByName(req, res, next))
); // Get user data filtered by user id -> Can be accessed by users with role "users" and "admin"

router.get(
  "/PolicieId/:policieId",
  authorize([Role.Admin]),
  asyncMiddleware(async (req, res, next) => getByPolicieId(req, res, next))
); // Get the user linked to a policy number -> Can be accessed by users with role "admin"

module.exports = router;

async function getAll(req, res, next) {
  const users = await clientService.getAll();
  res.json(users);
}

async function getById(req, res, next) {
  const id = req.params.id;

  const user = await clientService.getById(id);
  res.json(user);
}

async function getByName(req, res, next) {
  const name = req.params.name;

  const user = await clientService.getByName(name);
  res.json(user);
}

async function getByPolicieId(req, res, next) {
  const policieId = req.params.policieId;
  const policie = await policiesService.getById(policieId);

  if (policie.lenght) return [];
  const clients = await clientService.getById(policieId);
  res.json(clients);
}
