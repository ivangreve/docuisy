const express = require("express");
const router = express.Router();
const Role = require("../helpers/role");
const asyncMiddleware = require("../helpers/asyncMiddleware");
var fs = require("fs");
const dree = require("dree");

// Documents ROUTES
router.post(
  "/getFileContent",
  asyncMiddleware(async (req, res, next) => getFile(req, res, next))
);

router.post(
  "/saveFileContent",
  asyncMiddleware(async (req, res, next) => updateFile(req, res, next))
);

router.post(
  "/createFolder",
  asyncMiddleware(async (req, res, next) => createFolder(req, res, next))
);

router.post(
  "/createFile",
  asyncMiddleware(async (req, res, next) => createFile(req, res, next))
);

router.get(
  "/getDirectoryTree",
  asyncMiddleware(async (req, res, next) => getDirectoryTree(req, res, next))
);

module.exports = router;

async function getFile(req, res, next) {
  let path = req.body.path;

  fs.readFile(path, "utf8", function (err, data) {
    res.json({ fileContent: data, error: err });
  });
}

async function updateFile(req, res, next) {
  const path = req.body.path;
  const fileContent = req.body.fileContent;
  fs.writeFile(path, fileContent, function (err) {
    res.json({ success: false, error: err });
  });
}

async function createFile(req, res, next) {
  console.log(req.body);
  const path = req.body.path + "/" + req.body.fileName;
  const fileContent = "# Docuisy - Empty file";
  fs.writeFile(path, fileContent, function (err) {
    res.json({ success: false, error: err });
  });
}

async function createFolder(req, res, next) {
  const path = req.body.path;
  const folderName = req.body.folderName;
  var dir = path + "/" + folderName;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    res.json({ success: true, message: "Carpeta creada!" });
  } else {
    res.json({ success: false, message: "Carpeta existente!" });
  }
}

async function getDirectoryTree(req, res, next) {
  //En el futuro https://www.npmjs.com/package/app-root-path => Usar /node_modules
  const pathRoot = process.env.PWD;
  const options = {
    stat: false,
    normalize: true,
    followLinks: true,
    size: true,
    hash: true,
    exclude: [/node_modules/, /.vscode/, /.git/, /dist/, /.idea/, /\*.sln/],
    extensions: ["txt", "md", "jpg", "png"]
  };

  const tree = dree.scan(pathRoot, options);
  res.json([tree]);
}

// Servicio para eliminar folders y files