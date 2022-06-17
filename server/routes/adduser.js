var express = require('express');
var router = express.Router();
const db = require('../public/DB');

async function receiveAddUser() {
  router.post('/', async (req, res) => {
    await addUser(req.body.fname, req.body.fcpf);
    res.redirect('http://192.168.0.8:3001/cashier');
  });
}

receiveAddUser();

async function addUser(name, role) {
  try {
    await db.any(`
  INSERT INTO users (name, role)
  VALUES ('${name}', '${role}' )
`);
  } catch (e) {
    console.log(e);
  }
}

module.exports = router;
