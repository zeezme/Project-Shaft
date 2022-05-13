var express = require('express');
var router = express.Router();
const db = require('../public/DB');

async function receiveAddUser() {
  router.get('/', async (req, res) => {
    await addUser('Cliente', 'Pedido');
    console.log('Added joaoputo');
    res.send(';)');
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
