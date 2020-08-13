const express = require("express");
const router = express.Router();
const clientService = require("../services/clients.service");
const asyncMiddleware = require("../helpers/asyncMiddleware");

// Auth Controller ROUTES
router.post(
  "/authenticate",
  asyncMiddleware(async (req, res, next) => authenticate(req, res, next))
); // public route

//Authentication only Email
async function authenticate(req, res, next) {
  const userToken = await clientService.authenticate(req.body);
  if (userToken) {
    res.json(userToken);
  } else {
    res.status(401).json({ message: "Email is incorrect" });
  }
}

module.exports = router;
