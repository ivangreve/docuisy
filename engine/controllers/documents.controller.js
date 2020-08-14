const express = require("express");
const router = express.Router();
const Role = require("../helpers/role");
const asyncMiddleware = require("../helpers/asyncMiddleware");
var fs = require("fs");
const dree = require("dree");
var appRoot = require("app-root-path");

// Documents ROUTES
router.post(
  "/getFileContent",
  asyncMiddleware(async (req, res, next) => getFile(req, res, next))
);

router.post(
  "/saveFileContent",
  asyncMiddleware(async (req, res, next) => updateFile(req, res, next))
);

router.get(
  "/getDirectoryTree",
  asyncMiddleware(async (req, res, next) => getDirectoryTree(req, res, next))
);

module.exports = router;

async function getFile(req, res, next) {
  let path = req.body.path;

  fs.readFile(path, "utf8", function (err, data) {
    res.json({ fileContent: data });
  });
}

async function updateFile(req, res, next) {
  const path = req.body.path;
  const fileContent = req.body.fileContent;
  fs.writeFile(path, fileContent, function (err) {
    res.json({ success: true });
  });
}

async function getDirectoryTree(req, res, next) {
  //En el futuro https://www.npmjs.com/package/app-root-path => Usar /node_modules
  const pathRoot = process.env.PWD;
  console.log(pathRoot);
  //appRoot.path.split("engine")[0] + "wiki";
  const options = {
    stat: false,
    normalize: true,
    followLinks: true,
    size: true,
    hash: true,
    extensions: ["txt", "md", "csv"]
  };

  const tree = dree.scan(pathRoot, options);
  res.json([tree]);
}
