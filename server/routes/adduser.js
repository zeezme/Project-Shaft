var express = require('express');
var router = express.Router();
const db = require('../public/DB');

async function receiveAddUser() {
  router.post('/', async (req, res) => {
    await addUser(req.body.fprato, req.body.fvalor);
    res.redirect('http://192.168.0.8:3001/kitchen');
  });
}

receiveAddUser();

async function addUser(name, role) {
  await db.any(`
      INSERT INTO users (name, role)
      VALUES ('${name}', '${role}' )
    `);
}

module.exports = router;
